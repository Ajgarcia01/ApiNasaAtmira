import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apod } from 'src/app/interfaces/apod';
import { ApodService } from 'src/app/services/apod/apod.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  apod: Apod;


constructor(private _service:ApodService, private router: Router){}


ngOnInit(): void {
  this._service.data$.subscribe(data => this.apod = data);
  console.log(this.apod);


}

regress() {
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

