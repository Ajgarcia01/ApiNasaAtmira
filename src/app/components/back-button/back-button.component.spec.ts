import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BackButtonComponent } from './back-button.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoaderService } from 'src/app/services/spinner/loader.service';

describe('BackButtonComponent', () => {
  let component: BackButtonComponent;
  let fixture: ComponentFixture<BackButtonComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let loaderService: LoaderService;

  function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }

  beforeEach(async () => {
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ BackButtonComponent ],
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
          providers: [
            { provide: Router, useValue: routerSpyObj },
            TranslateService,
            TranslateStore
          ],
          
    })
    .compileComponents();

    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackButtonComponent);
    component = fixture.componentInstance;
    loaderService = TestBed.inject(LoaderService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /dashboard on click', () => {
    const backButton = fixture.debugElement.query(By.css('.button4'));
    backButton.triggerEventHandler('click', null);

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
  });
  

  it('should navigate to /detail if navigation fails', () => {
    routerSpy.navigate.and.returnValue(Promise.reject(new Error('Navigation failed')));

    const backButton = fixture.debugElement.query(By.css('.button4'));
    backButton.triggerEventHandler('click', null);

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
  });
  
});
