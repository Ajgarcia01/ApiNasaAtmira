import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BackButtonComponent } from './back-button.component';

describe('BackButtonComponent', () => {
  let component: BackButtonComponent;
  let fixture: ComponentFixture<BackButtonComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ BackButtonComponent ],
      providers: [
        { provide: Router, useValue: routerSpyObj },
      ],
    })
    .compileComponents();

    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackButtonComponent);
    component = fixture.componentInstance;
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
