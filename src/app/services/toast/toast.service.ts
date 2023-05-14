import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr:ToastrService) { }


    showToast(title:string,description:string) {
    this.toastr.error(title,description);
  }
  
}

