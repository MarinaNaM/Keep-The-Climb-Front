import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { AppComponent } from './app.component';
import { iUser } from './core/models/user-model';
import { AppState } from './store/app.state';

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

const mockUser: iUser = {
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
};

const mockToken = '';

describe('AppComponent', () => {
  let initialState = mockInitialState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('When loading the app with a valid token in localStorage', () => {
    it('Should fetch the user data from the api with the token', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.componentInstance;
      spyOn(component.localStorage, 'getToken').and.returnValue('token');
      spyOn(component.user, 'loginUser').and.returnValue(
        of({ user: {} as iUser, token: 'token' })
      );
      spyOn(component.store, 'dispatch');
      fixture.detectChanges();

      expect(component.store.dispatch).toHaveBeenCalled();
    });
  });
  describe('When loading the app with a not valid token in localStorage', () => {
    it('should throw an error ', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.componentInstance;
      spyOn(component.localStorage, 'getToken').and.returnValue('token');
      spyOn(component.user, 'loginUser').and.returnValue(
        new Observable(() => {
          throw new Error('test');
        })
      );
      spyOn(component.store, 'dispatch');
      fixture.detectChanges();

      expect(component.store.dispatch).toHaveBeenCalled();
    });
  });
});
