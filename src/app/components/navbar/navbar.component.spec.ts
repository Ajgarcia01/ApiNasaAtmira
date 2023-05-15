import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { TranslateService, TranslateStore, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NavbarComponent', () => {
  let translateService:TranslateService
  function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        TranslateModule.forRoot(
          {
            loader: {
              provide: TranslateLoader,
              useFactory: (createTranslateLoader),
              deps: [HttpClient]
          }})],
      providers:[TranslateStore,TranslateService]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have supported languages "es" and "en"', () => {
    expect(translateService.getLangs()).toEqual(['es', 'en']);
  });

  it('should set default language to "en"', () => {
    expect(translateService.defaultLang).toBe('en');
  });

  it('should switch language to "es" when current language is "en"', () => {
    component.switchLanguage('es');
    expect(translateService.currentLang).toBe('es');
  });

  it('should switch language to "en" when current language is "es"', () => {
    component.switchLanguage('en');
    fixture.detectChanges();
    expect(translateService.currentLang).toBe('en');
  });
});
