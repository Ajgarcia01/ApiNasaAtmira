import { TestBed } from '@angular/core/testing';
import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it('should set loading to true', () => {
    service.setLoading(true);
    expect(service.getLoading()).toBeTruthy();
  });

  it('should set loading to false', () => {
    service.setLoading(false);
    expect(service.getLoading()).toBeFalsy();
  });
});
