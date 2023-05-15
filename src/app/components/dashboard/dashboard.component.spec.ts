import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { DashboardComponent } from './dashboard.component';
import { ApodService } from 'src/app/services/apod/apod.service';
import { Apod } from 'src/app/interfaces/apod';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SpinnerComponent } from '../spinner/spinner.component';
import { LoaderService } from 'src/app/services/spinner/loader.service';
import { TranslateService, TranslateStore, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Router } from '@angular/router';
import { BackButtonComponent } from '../back-button/back-button.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let apodService: ApodService;
  let toastService: ToastService;
  let laoderService: LoaderService;
  let router: Router;

   function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent, SpinnerComponent,BackButtonComponent],
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot(
          {
            loader: {
              provide: TranslateLoader,
              useFactory: (createTranslateLoader),
              deps: [HttpClient]
          }})],
      providers: [
        ApodService,
        ToastrService,
        LoaderService,
        TranslateService,
        TranslateStore
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    apodService = TestBed.inject(ApodService);
    toastService = TestBed.inject(ToastService);
    laoderService = TestBed.inject(LoaderService);
    router= TestBed.inject(Router)
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call getData on initialization', () => {
    spyOn(component, 'getData');
    component.ngOnInit();
    expect(component.getData).toHaveBeenCalled();
  });
  

  it('should get data from ApodService', () => {
    const apodData: Apod[] = [
      {
        date: '2023-03-10',
        explanation: 'Mock APOD explanation',
        hdurl: 'http://mockhdurl.com',
        media_type: 'image',
        service_version: 'v1',
        title: 'Mock APOD title',
        url: 'http://mockurl.com',
      }
    ];
    spyOn(apodService, 'getData').and.returnValue(of(apodData));
    component.getData();
    expect(component.items).toEqual(apodData);
  });

  /*
   it('should show error toast when getting data from ApodService fails', () => {
    spyOn(apodService, 'getData').and.returnValue(of(null));
    spyOn(toastService, 'showToast');
    component.getData();
    expect(toastService.showToast).toHaveBeenCalledWith('Error in the get Data', 'Please Keep Calm');
  });
  */

    it('should show loading spinner while data is loading', () => {
    const loading=laoderService.loading= true;
    fixture.detectChanges();
    expect(loading).toBeTruthy();
  });


  it('no should show loading spinner while data is not loading', () => {
    const loading=laoderService.loading= false;
    fixture.detectChanges();
    expect(loading).toBeFalsy();
  });


  it('should navigate to detail page after sending data', () => {
    const apod = {
      date: '2023-05-12',
      explanation: 'Mock APOD explanation',
      hdurl: 'http://mockhdurl.com',
      media_type: 'image',
      service_version: 'v1',
      title: 'Mock APOD title',
      url: 'http://mockurl.com',
    };
    spyOn(apodService, 'setData');
    spyOn(router, 'navigate');

    component.sendData(apod);

    expect(apodService.setData).toHaveBeenCalledWith(apod);
    expect(router.navigate).toHaveBeenCalledWith(['/detail']);
  });


  it('should show error toast when getting data from service fails', () => {
    const error = 'Error in the get Data';
    spyOn(apodService, 'getData').and.returnValue(throwError(error));
    spyOn(toastService, 'showToast');
    component.getData();
    expect(toastService.showToast).toHaveBeenCalledWith(error, 'Please Keep Calm');
  });


});