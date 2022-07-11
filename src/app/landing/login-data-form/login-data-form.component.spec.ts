import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDataFormComponent } from './login-data-form.component';

describe('LoginDataFormComponent', () => {
  let component: LoginDataFormComponent;
  let fixture: ComponentFixture<LoginDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDataFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
