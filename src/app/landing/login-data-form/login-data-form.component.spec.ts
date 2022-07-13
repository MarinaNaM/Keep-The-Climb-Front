import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { iUser } from 'src/app/core/models/user-model';
import { AppState } from 'src/app/store/app.state';
import { LoginDataFormComponent } from './login-data-form.component';

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

describe('LoginDataFormComponent', () => {
  let component: LoginDataFormComponent;
  let fixture: ComponentFixture<LoginDataFormComponent>;
  let initialState = mockInitialState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [LoginDataFormComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When call handleClick method with email and password', () => {
    it('should be call store.dispatch, saveToken and navigate', () => {
      component.userData = { email: 'test@test.es', psw: '123456789' };
      spyOn(component.userApi, 'loginUser').and.returnValue(
        of({ user: {} as iUser, token: 'token' })
      );
      spyOn(component.store, 'dispatch');
      spyOn(component.localStorage, 'saveToken');
      spyOn(component.router, 'navigate');
      fixture.detectChanges();

      component.handleClick();

      expect(component.store.dispatch).toHaveBeenCalled();
      expect(component.localStorage.saveToken).toHaveBeenCalled();
      expect(component.router.navigate).toHaveBeenCalled();
    });
  });
  describe('When call handleClick method with email and password', () => {
    it('should be call store.dispatch, saveToken and navigate', () => {
      component.userData = { email: 'test@test.es', psw: '123456789' };
      spyOn(component.userApi, 'loginUser').and.returnValue(
        new Observable(() => {
          throw new Error('test');
        })
      );
      fixture.detectChanges();

      component.handleClick();

      expect(component.loginError).toBeTrue();
    });
  });
});
