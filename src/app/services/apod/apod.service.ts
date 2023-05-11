import { HttpClient, HttpParams } from '@angular/common/http';
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
  defaultApod: Apod = { date: '', explanation: 'There are not have information about this element', hdurl: 'https://img.freepik.com/premium-vector/404-error-page-found_7737-1502.jpg', media_type: '', service_version: '', title: '404', url: '' };
  headers = new HttpHeaders();
  today = new Date();
  fiveDaysAgo = new Date();
  formattedToday:string="";
  formattedFiveDaysAgo:string="";
  uri='';
  private dataSubject = new BehaviorSubject<Apod>(this.defaultApod);
  data$ = this.dataSubject.asObservable();
  constructor(private http:HttpClient,private _spinner:LoaderService) {}

  isImage(url: string): boolean {
    const extensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const fileExt = url.substr(url.lastIndexOf('.'));
    return extensions.includes(fileExt);
  }

  getData(): Observable<Apod[]> {
    this._spinner.setLoading(true);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    this.setterDate();
    return this.http.get<Apod[]>(this.uri, { headers }).pipe(
      map(response => {
        this._spinner.setLoading(false)
        if (response && response.length > 0 && this.isImage(response[0].hdurl.toString())) {
          return response;
        } else {
          throw new Error('No Images');
        }
      }),
      catchError((error) => {
        this._spinner.setLoading(false);
        console.error('Error fetching data:', error);
        return throwError('Unable to fetch data. Please try again later.');
      })
    );
  }
  

  setterDate(){
      this.getStarteDate();
      const uri1=`https://api.nasa.gov/planetary/apod?api_key=${environment.api_key}`;
      const uri2=`${environment.uri1}=${this.formattedFiveDaysAgo}`
      const uri3=`${environment.uri2}=${this.formattedToday}`
      this.uri=this.uri.concat(uri1,uri2,uri3);
  }

  getStarteDate(){
  this.fiveDaysAgo.setDate(this.today.getDate() - 5);
  this.formattedToday = this.today.toISOString().slice(0, 10);
  this.formattedFiveDaysAgo = this.fiveDaysAgo.toISOString().slice(0, 10);
}


setData(data: Apod) {
  this.dataSubject.next(data);
  
}





}
