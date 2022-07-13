import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { WithoutLoginButtonComponent } from './without-login-button.component';

describe('WithoutLoginButtonComponent', () => {
  let component: WithoutLoginButtonComponent;
  let fixture: ComponentFixture<WithoutLoginButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithoutLoginButtonComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(WithoutLoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When goHome method is called', () => {
    it('should be call navigate', () => {
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.goHome();

      expect(component.router.navigate).toHaveBeenCalled();
    });
  });
});
