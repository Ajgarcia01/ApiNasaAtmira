import { Component, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';

import { tap, catchError, of } from 'rxjs';
import { Apod } from 'src/app/interfaces/apod';
import { ApodService } from 'src/app/services/apod/apod.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  imgSrc:string="";
  items: Apod[]=[];
  imageUrl = 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg';

  constructor(private _service:ApodService,private router:Router){

  }
 
  ngOnInit() {
    this.getData();
   
  }

  sendData(apod:Apod) {
    this._service.setData(apod);
    this.router.navigate(['/detail'])
  }

  getData() {
    this._service.getData().pipe(
      tap(data => console.log(data)),
      catchError(error => {
        console.error(error);
        return of([]);
      })
    ).subscribe(data => {
      this.items = data;
    });
  }

}
  

