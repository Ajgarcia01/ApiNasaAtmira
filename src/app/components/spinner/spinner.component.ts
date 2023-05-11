import { Component } from '@angular/core';
import { LoaderService } from 'src/app/services/spinner/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  constructor(public loader: LoaderService) { }


  ngOnInit() {
    this.loadSpinner();

  }


  loadSpinner(){
    this.loader.setLoading(true);
    setTimeout( () =>   this.loader.setLoading(false), 1000 );
  }
}
