import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, map, tap, catchError, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Apod } from 'src/app/interfaces/apod';
import { LoaderService } from '../spinner/loader.service';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApodService {
  apodNull:Apod

  /* Observables */
  dataSubject = new BehaviorSubject<Apod>(this.getDataFromLocalStorage());
  data$ = this.dataSubject.asObservable();
  apodSubject = new BehaviorSubject<Apod[]>([]);
  apod$ = this.apodSubject.asObservable();

  /* Variables */
  headers = new HttpHeaders();
  today = new Date();
  fiveDaysAgo = new Date();
  formattedToday:string="";
  formattedFiveDaysAgo:string="";
  uri='';



  constructor(private http:HttpClient,private _spinner:LoaderService) {}

    /* Comprobar si los objetos que vienen tiene como una url una extension de foto y no de imagen */
  isImage(url: string): boolean {
    const extensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const fileExt = url.substr(url.lastIndexOf('.'));
    return extensions.includes(fileExt);
  }
  
  /* Traer los objetos con las fechas establecidas (actual -5, serian 6 contando el actual) */
  getData(): Observable<Apod[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    this.setterDate();
    this.http.get<Apod[]>(this.uri, { headers }).pipe(
      map(response => {
        if (response && response.length > 0 && this.isImage(response[0].hdurl.toString())) {
          this.apodSubject.next(response);
        } else {
          throw new Error('No Images');
        }
      }),
      catchError((error) => {
        console.error('Error fetching data:', error);
        return throwError('Unable to fetch data. Please try again later.');
      })
    ).subscribe();
    return this.apod$;
  }


  setterDate(){
      this.getStarteDate();
      this.setterUri();
      
  }

    /* Concatenar la uri */
  setterUri(){
    const url = new URL(environment.uri);
    url.searchParams.set('api_key', environment.api_key);
    url.searchParams.set('start_date', this.formattedFiveDaysAgo);
    url.searchParams.set('end_date', this.formattedToday);
    this.uri=url.toString();
  }

    /* Coger la fecha en la que esta el usuario y restarle 5 para coger los 6 dias */
  getStarteDate(){
  this.fiveDaysAgo.setDate(this.today.getDate() - 5);
  this.formattedToday = this.today.toISOString().slice(0, 10);
  this.formattedFiveDaysAgo = this.fiveDaysAgo.toISOString().slice(0, 10);
}

  /* Para pasarle a la pagina de detail el objecto que se haya seleccionado a traves de una observable */
setData(data: Apod) {
  this.dataSubject.next(data);
  
}

  /* Coger el objeto que se haya seleccionado para que cuando se recargue la pagina no se pierdan los detalles de la observable
    y de esta forma coger el objeto que estaba en la pantalla de detail ya que con el observable se pierde
  */
getDataFromLocalStorage() {
  const data = localStorage.getItem('data');
  this.apodNull=JSON.parse(data);
  return this.apodNull;
}

  /* guardar dicho objeto en el localStorage */
saveData(data: Apod) {
  localStorage.setItem('data', JSON.stringify(data));
}





}
