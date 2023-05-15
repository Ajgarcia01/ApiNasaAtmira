import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService, TranslateStore } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from 'src/environments/environment';

describe('AppComponent', () => {
  function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }
  let fixture: ComponentFixture<AppComponent>;
  let translateService:TranslateService
  let component: AppComponent;
  beforeEach(() => TestBed.configureTestingModule({
    
    imports: [
      HttpClientTestingModule,
      RouterTestingModule,
      HttpClientModule,
      TranslateModule.forChild(
        {
          loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        }})],
        providers:[TranslateService,TranslateStore],
    declarations: [AppComponent,NavbarComponent,FooterComponent]
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Universe Planet'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Universe Planet');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    spyOn(app, 'changeText');

    expect(app.text).toBe("Universe Planet")  
    app.changeText();
    expect(app.text).toBe("Universe Planet");
    expect(app.changeText).toHaveBeenCalled();
  });


  it('should have default language set to "es"', () => {
    expect(translateService.defaultLang).toBe('es');
  });

  it('should have supported languages "es" and "en"', () => {
    expect(translateService.getLangs()).toEqual(['es', 'en']);
  });

  it('should change text when calling changeText method', () => {
    component.changeText();
    expect(component.text).toBe(component.title);
  });


});
