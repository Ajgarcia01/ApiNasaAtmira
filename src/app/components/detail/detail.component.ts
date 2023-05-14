import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apod } from 'src/app/interfaces/apod';
import { ApodService } from 'src/app/services/apod/apod.service';
import { of } from 'rxjs';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  apod: Apod  = {
    date: '2023-05-12',
    explanation: 'Mock APOD explanation',
    hdurl: 'http://mockhdurl.com',
    media_type: 'image',
    service_version: 'v1',
    title: 'Mock APOD title',
    url: 'http://mockurl.com',
  };

constructor(private _service:ApodService){}


ngOnInit(): void {
  this.getData();
  window.scrollTo(0, 0);
}



getData() {
  const observableData = this._service.data$.subscribe(data => this.apod = data);
  
  if(observableData){
    this._service.saveData(this.apod)
    console.log("Objetooo"+this.apod);
    
    return this.apod;
    
  }else{
    this.apod=this._service.getDataFromLocalStorage()
    return this.apod
  }
}


}

