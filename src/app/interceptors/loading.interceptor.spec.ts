import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { LoadingInterceptor } from './loading.interceptor';
import { LoaderService } from 'src/app/services/spinner/loader.service';

describe('LoadingInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let loaderService: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LoaderService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoadingInterceptor,
          multi: true
        }
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    loaderService = TestBed.inject(LoaderService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should set loading to true before making the request', () => {
    spyOn(loaderService, 'setLoading');
    
    httpClient.get('/api/data').subscribe();

    expect(loaderService.setLoading).toHaveBeenCalledWith(true);

    const req = httpMock.expectOne('/api/data');
    req.flush({});
  });

  it('should set loading to false after completing the request', () => {
    spyOn(loaderService, 'setLoading');

    httpClient.get('/api/data').subscribe();

    const req = httpMock.expectOne('/api/data');
    req.flush({});

    expect(loaderService.setLoading).toHaveBeenCalledWith(false);
  });

});
  
