import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DetailComponent } from './detail.component';
import { ApodService } from 'src/app/services/apod/apod.service';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from '../spinner/spinner.component';
import { BackButtonComponent } from '../back-button/back-button.component';
import { Apod } from '../../interfaces/apod';
import { Injector } from '@angular/core';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let exampleService: ApodService;
  let injector: Injector;
  let httpMock: HttpTestingController;
  let fixture: ComponentFixture<DetailComponent>;
  const mockApod: Apod = {
    date: '2023-03-10',
    explanation: 'Mock APOD explanation',
    hdurl: 'http://mockhdurl.com',
    media_type: 'image',
    service_version: 'v1',
    title: 'Mock APOD title',
    url: 'http://mockurl.com',
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailComponent,SpinnerComponent,BackButtonComponent],
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [ApodService]
    });
    exampleService = jasmine.createSpyObj(['data$', 'getDataFromLocalStorage', 'saveData']);
    injector = getTestBed();
    localStorage.setItem('data', JSON.stringify(mockApod));
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = injector.get(HttpTestingController);
    exampleService = injector.get(ApodService);
    fixture.detectChanges();

  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  
  it('should call getData in ngOnInit', () => {
    const fixture = TestBed.createComponent(DetailComponent);
    const component = fixture.componentInstance;
    const getDataSpy = spyOn(component, 'getData');
    component.ngOnInit();
    expect(getDataSpy).toHaveBeenCalled();
  });
  

  it('should call saveData when data is available', () => {
    const fixture = TestBed.createComponent(DetailComponent);
    const component = fixture.componentInstance;
    const apodService = TestBed.inject(ApodService);
    const saveDataSpy = spyOn(apodService, 'saveData');
    component.apod = {
      date: '2023-05-12',
      explanation: 'Mock APOD explanation',
      hdurl: 'http://mockhdurl.com',
      media_type: 'image',
      service_version: 'v1',
      title: 'Mock APOD title',
      url: 'http://mockurl.com',
    };
    component.getData();
    expect(saveDataSpy).toHaveBeenCalledWith(component.apod);
  });

  it('should set apod to the value returned by getDataFromLocalStorage when no data is available', () => {
    const fixture = TestBed.createComponent(DetailComponent);
    const component = fixture.componentInstance;
    const apodService = TestBed.inject(ApodService);
    const mockData = {
      date: '2023-03-10',
      explanation: 'Mock APOD explanation',
      hdurl: 'http://mockhdurl.com',
      media_type: 'image',
      service_version: 'v1',
      title: 'Mock APOD title',
      url: 'http://mockurl.com',
    };
    spyOn(apodService, 'getDataFromLocalStorage').and.returnValue(mockData);
    component.getData();
    expect(component.apod).toEqual(mockData);
  });
  
});
