import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Universe Planet';
  text = "Universe Planet";
constructor(public translate:TranslateService){
  this.translate.addLangs(['es','en']);
  this.translate.setDefaultLang('es');
}


  changeText = function () {
    this.text=this.title
    return this.title;
}



}
