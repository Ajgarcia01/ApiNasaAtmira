import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService  } from 'ngx-toastr';

describe('ToastService', () => {
  let service: ToastService;
    let toastrServiceSpy: jasmine.SpyObj<ToastrService>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      providers: [
        ToastService,
        ToastrService
      ]
    });
    service = TestBed.inject(ToastService);
    toastrServiceSpy = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /*

  it('should call ToastrService.error with the provided title and description', () => {
    const title = 'Test title';
    const description = 'Test description';

    service.showToast(title, description);

    expect(toastrServiceSpy.error).toHaveBeenCalledWith(title, description);
  });
  */
});