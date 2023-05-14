import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public translate:TranslateService){
    this.translate.addLangs(['es','en']);
    this.translate.setDefaultLang('en');
  }
  

  switchLanguage(idioma:string) {
   if(this.translate.store.currentLang=='es'){
      this.translate.use(idioma);
   }else{
    this.translate.use(idioma);
   }
   
  }

}
