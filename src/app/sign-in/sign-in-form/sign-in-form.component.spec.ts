import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { iUser } from 'src/app/core/models/user-model';
import { AppState } from 'src/app/store/app.state';

import { SignInFormComponent } from './sign-in-form.component';

const mockInitialState: AppState = {
  schools: { schools: [] },
  sectors: { sectors: [] },
  routes: { routes: [] },
  user: {
    user: {
      _id: '123456',
      name: 'test-user',
      psw: '123456789',
      img: 'src',
      email: 'usertest@gmail.com',
      address: {
        community: '',
        province: '',
      },
      role: 'user',
      routes: [
        {
          route: '123456789012345678901234',
          isProject: false,
          isEnchain: false,
        },
      ],
    },
    token: '',
  },
};

describe('SignInFormComponent', () => {
  let component: SignInFormComponent;
  let fixture: ComponentFixture<SignInFormComponent>;
  let initialState = mockInitialState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [SignInFormComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(SignInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When call handleSubmit method', () => {
    it('should be call store.dispatch, saveToken and navigate', () => {
      component.registerData = {
        name: 'Bea',
        email: 'bea@test.com',
        psw: '123456789',
        rPsw: '123456789',
      };
      spyOn(component.userApi, 'addUser').and.returnValue(
        of({ user: {} as iUser, token: 'token' })
      );
      spyOn(component.store, 'dispatch');
      spyOn(component.localStorage, 'saveToken');
      spyOn(component.router, 'navigate');
      fixture.detectChanges();

      component.handleSubmit();

      expect(component.userApi.addUser).toHaveBeenCalled();
      expect(component.localStorage.saveToken).toHaveBeenCalled();
      expect(component.router.navigate).toHaveBeenCalledWith(['home']);
    });
  });
  describe('When call handleSubmit method with not the same psw', () => {
    it('should not be call store.dispatch, saveToken and navigate', () => {
      component.registerData = {
        name: 'Bea',
        email: 'bea@test.com',
        psw: '123456789',
        rPsw: '123456787',
      };

      component.handleSubmit();

      expect(component.passwordError).toBeTrue();
    });
  });
  describe('When call handleSubmit method with a psw lower than 8 digits', () => {
    it('should not be call store.dispatch, saveToken and navigate', () => {
      component.registerData = {
        name: 'Bea',
        email: 'bea@test.com',
        psw: '1234567',
        rPsw: '1234567',
      };

      component.handleSubmit();

      expect(component.passwordLengthError).toBeTrue();
    });
  });
  describe('When call handleSubmit method and email is not valid', () => {
    it('should not be call store.dispatch, saveToken and navigate', () => {
      component.registerData = {
        name: 'Bea',
        email: 'beatest.com',
        psw: '123456789',
        rPsw: '123456789',
      };
      spyOn(component.userApi, 'addUser').and.returnValue(
        new Observable(() => {
          throw new Error('test');
        })
      );

      component.handleSubmit();

      expect(component.emailError).toBeTrue();
      expect(component.registerData.email).toEqual('');
    });
  });
});
