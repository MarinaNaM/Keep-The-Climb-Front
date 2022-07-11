import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutLoginButtonComponent } from './without-login-button.component';

describe('WithoutLoginButtonComponent', () => {
  let component: WithoutLoginButtonComponent;
  let fixture: ComponentFixture<WithoutLoginButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutLoginButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutLoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
