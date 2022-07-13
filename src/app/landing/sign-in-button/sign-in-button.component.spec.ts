import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SignInButtonComponent } from './sign-in-button.component';

describe('SignInButtonComponent', () => {
  let component: SignInButtonComponent;
  let fixture: ComponentFixture<SignInButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInButtonComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SignInButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When goSignIn method is called', () => {
    it('should be call navigate', () => {
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.goSignIn();

      expect(component.router.navigate).toHaveBeenCalled();
    });
  });
});
