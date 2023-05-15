import { Component, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';

import { tap, catchError, of, Subscription } from 'rxjs';
import { Apod } from 'src/app/interfaces/apod';
import { ApodService } from 'src/app/services/apod/apod.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  imgSrc:string="";
  items: Apod[]=[];
  imageUrl = 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg';
  subscription: Subscription;


  constructor(private _service:ApodService,private router:Router,private _toast:ToastService,private translate: TranslateService){

  }
 
  ngOnInit() {
    this.getData();
    window.scrollTo(0, 0);
   
  }

  sendData(apod:Apod) {
    this._service.setData(apod);
    this.router.navigate(['/detail'])
  }

  getData() {
    this.subscription = this._service.getData().subscribe(
      data => {
        this.items = data;
      },
      error => {
        this._toast.showToast("Error in the get Data","Please Keep Calm")
        console.error(error);
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
  

