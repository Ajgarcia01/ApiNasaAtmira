import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent {


  constructor(private router:Router){}



  backDashboard(){
    this.router.navigate(['/dashboard'])
    .then(nav => {
      console.log(nav);
    })
    .catch(err => {
      console.log( "Navigation failed: " + err.message);
      this.router.navigate(['/detail'])
    });
  }

}
