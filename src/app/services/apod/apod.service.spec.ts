import { TestBed, getTestBed} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApodService } from './apod.service';
import { Apod } from 'src/app/interfaces/apod';
import { BehaviorSubject, throwError } from 'rxjs';
import { LoaderService } from '../spinner/loader.service';
import { environment } from 'src/environments/environment';


describe('ApodService', () => {
  let injector: TestBed;
  let service: ApodService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [ApodService,LoaderService]
    });

    injector = getTestBed();
    service = injector.get(ApodService);
    httpMock = injector.get(HttpTestingController)
  });

  afterEach(() => {
    httpMock.verify();
  });  

  it('should be created', () => {
    const service: ApodService = TestBed.get(ApodService);
    expect(service).toBeTruthy();
   });

   it('should have getData function', () => {
    const service: ApodService = TestBed.get(ApodService);
    expect(service.getData).toBeTruthy();
   });

   const dummyUserListResponse:Apod[]=[]


   it('should retrieve a list of Apod objects', () => {
    const apods: Apod[] = [
      { date: '2023-05-12', title: 'Apod 1', hdurl: 'https://example.com/image1.jpg', explanation: 'Explanation 1', media_type:'v2', service_version:"v2", url:''},
      { date: '2023-05-11', title: 'Apod 2', hdurl: 'https://example.com/image2.jpg', explanation: 'Explanation 2', media_type:'v2', service_version:"v2", url:''},
    ];

    service.getData().subscribe((data) => {
      expect(data)
    });

    const req = httpMock.expectOne(service.uri);
    expect(req.request.method).toBe('GET');
    req.flush(apods);
  });

  it('should handle errors when retrieving data', () => {
    const errorMessage = 'Unable to fetch data. Please try again later.';

    spyOn(service, 'getData').and.returnValue(throwError(errorMessage));

    service.getData().subscribe(() => {
      fail('should have failed with an error message');
    }, (error) => {
      expect(error).toEqual(errorMessage);
    });
  });


  describe('isImage', () => {
    it('should return true for valid image URLs', () => {
      expect(service.isImage('https://example.com/image.jpg')).toBeTrue();
      expect(service.isImage('https://example.com/image.jpeg')).toBeTrue();
      expect(service.isImage('https://example.com/image.png')).toBeTrue();
      expect(service.isImage('https://example.com/image.gif')).toBeTrue();
    });

    it('should return false for invalid image URLs', () => {
      expect(service.isImage('https://example.com/image.txt')).toBeFalse();
      expect(service.isImage('https://example.com/image.mp4')).toBeFalse();
      expect(service.isImage('https://example.com/image')).toBeFalse();
    });
  });


  describe('setterDate', () => {
    it('should set formattedToday and formattedFiveDaysAgo correctly', () => {
      const today = new Date();
      const fiveDaysAgo = new Date();
      fiveDaysAgo.setDate(today.getDate() - 5);

      const formattedToday = today.toISOString().slice(0, 10);
      const formattedFiveDaysAgo = fiveDaysAgo.toISOString().slice(0, 10);

      spyOn(service, 'getStarteDate').and.callThrough();
      service.setterDate();

      expect(service.getStarteDate).toHaveBeenCalled();
      expect(service.formattedToday).toEqual(formattedToday);
      expect(service.formattedFiveDaysAgo).toEqual(formattedFiveDaysAgo);
    });

    it('should call setterUri', () => {
      spyOn(service, 'setterUri');
      service.setterDate();
      expect(service.setterUri).toHaveBeenCalled();
    });
  });


  describe('setterUri', () => {
    it('should set the uri property correctly', () => {
      service.formattedToday = '2023-05-12';
      service.formattedFiveDaysAgo = '2023-05-07';
      service.setterUri();

      const expectedUri = new URL(environment.uri);
      expectedUri.searchParams.set('api_key', environment.api_key);
      expectedUri.searchParams.set('start_date', '2023-05-07');
      expectedUri.searchParams.set('end_date', '2023-05-12');

      expect(service.uri).toEqual(expectedUri.toString());
    });
  });


  describe('setData', () => {
    const apodMock: Apod = {
      date: '2022-05-12',
      explanation: 'This is a test explanation',
      title: 'Test title',
      url: 'https://apod.nasa.gov/apod/image/2205/image.jpg',
      hdurl: 'https://apod.nasa.gov/apod/image/2205/image_hd.jpg',
      media_type:"",
      service_version:""
    };

    it('should set the dataSubject', () => {
      service.setData(apodMock);
      service.data$.subscribe((data) => {
        expect(data).toEqual(apodMock);
      });
    });
  });


  describe('getDataFromLocalStorage', () => {
    it('should return null if there is no data in local storage', () => {
      spyOn(localStorage, 'getItem').and.returnValue(null);
      expect(service.getDataFromLocalStorage()).toBeNull();
    });

    it('should return the data from local storage if there is data', () => {
      const apodMock: Apod = {
        date: '2022-05-12',
        explanation: 'This is a test explanation',
        title: 'Test title',
        url: 'https://apod.nasa.gov/apod/image/2205/image.jpg',
        hdurl: 'https://apod.nasa.gov/apod/image/2205/image_hd.jpg',
        media_type:"",
        service_version:""
      };
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(apodMock));
      expect(service.getDataFromLocalStorage()).toEqual(apodMock);
    });
  });

  describe('getter for apod$', () => {
    it('should return observable of apod[]', () => {
      const apod: Apod[] = [
        { date: '2021-05-01', explanation: 'Test 1', hdurl: 'http://test1.com', title: 'Test 1', media_type:'',service_version:'',url:'' },
        { date: '2021-05-02', explanation: 'Test 2', hdurl: 'http://test2.com', title: 'Test 2', media_type:'',service_version:'',url:'' },
      ];
      service.apodSubject.next(apod);
      expect(service.apod$).toEqual(jasmine.any(Object));
      service.apod$.subscribe((data) => {
        expect(data).toEqual(apod);
      });
    });
  });
   
});
