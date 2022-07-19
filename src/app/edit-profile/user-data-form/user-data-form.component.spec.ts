import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { iUser, iUserState } from 'src/app/core/models/user-model';
import { AppState } from 'src/app/store/app.state';

import { UserDataFormComponent } from './user-data-form.component';

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
          route: {
            name: '',
            length: 1,
            grade: '',
            voteGrade: [{ user: '', vote: 1 }],
          },
          isProject: false,
          isEnchain: false,
        },
      ],
    },
    token: '',
  },
};

describe('UserDataFormComponent', () => {
  let component: UserDataFormComponent;
  let fixture: ComponentFixture<UserDataFormComponent>;
  let initialState = mockInitialState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [UserDataFormComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When handleSubmitUpdate is called with valid email, valid psw', () => {
    it('should call dispatch', () => {
      component.user = {
        user: {
          _id: 'test',
          name: 'test1',
          email: 'test1@test.com',
          img: 'abc',
          address: { community: 'uno', province: 'dos' },
          psw: '1234567890',
          routes: [],
        },
        token: 'token',
      };

      component.updatedUserData = {
        name: 'test',
        email: 'test@test.com',
        img: 'abc',
        address: {
          community: 'uno',
          province: 'dos',
        },
        psw: '123456789',
        rPsw: '123456789',
      };
      spyOn(component.apiUser, 'updateUser').and.returnValue(
        of({
          _id: 'test',
          name: 'test1',
          email: 'test1@test.com',
          img: 'abc',
          address: { community: 'uno', province: 'dos' },
          psw: '1234567890',
          routes: [],
        })
      );
      spyOn(component.store, 'dispatch');

      fixture.detectChanges();
      component.handleSubmitUpdate();

      expect(component.apiUser.updateUser).toHaveBeenCalled();
      expect(component.store.dispatch).toHaveBeenCalled();
    });
  });
  describe('When handleSubmitUpdate is called with valid email, valid psw but no changes in img, community and province', () => {
    it('should call dispatch', () => {
      component.user = {
        user: {
          _id: 'test',
          name: 'test1',
          email: 'test1@test.com',
          img: 'abc',
          address: { community: 'uno', province: 'dos' },
          psw: '1234567890',
          routes: [],
        },
        token: 'token',
      };

      component.updatedUserData = {
        name: 'test',
        email: 'test@test.com',
        address: {},
        psw: '123456789',
        rPsw: '123456789',
      };
      spyOn(component.apiUser, 'updateUser').and.returnValue(
        of({
          _id: 'test',
          name: 'test1',
          email: 'test1@test.com',

          address: {},
          psw: '1234567890',
          routes: [],
        })
      );
      spyOn(component.store, 'dispatch');

      fixture.detectChanges();
      component.handleSubmitUpdate();

      expect(component.apiUser.updateUser).toHaveBeenCalled();
      expect(component.store.dispatch).toHaveBeenCalled();
    });
  });
  describe('When handleSubmitUpdate is called with not valid name', () => {
    it('should call dispatch', () => {
      component.user = {
        user: {
          _id: 'test',
          name: 'test1',
          email: 'test1@test.com',
          img: 'abc',
          address: { community: 'uno', province: 'dos' },
          psw: '1234567890',
          routes: [],
        },
        token: 'token',
      };

      component.updatedUserData = {
        name: '',
        email: 'test@test.com',
        img: 'abc',
        address: {
          community: 'uno',
          province: 'dos',
        },
        psw: '123456789',
        rPsw: '123456789',
      };
      spyOn(component.apiUser, 'updateUser').and.returnValue(
        of({
          _id: 'test',
          name: '',
          email: 'test1@test.com',
          img: 'abc',
          address: { community: 'uno', province: 'dos' },
          psw: '1234567890',
          routes: [],
        })
      );

      fixture.detectChanges();
      component.handleSubmitUpdate();

      expect(component.errorMessage).toBe('Introduzca un nombre');
    });
  });

  describe('When handleSubmitUpdate is called with valid email, valid psw', () => {
    it('should call dispatch', () => {
      component.user = {
        user: {
          _id: 'test',
          name: 'test1',
          email: 'test1@test.com',
          img: 'abc',
          address: { community: 'uno', province: 'dos' },
          psw: '1234567890',
          routes: [],
        },
        token: 'token',
      };

      component.updatedUserData = {
        name: 'test',
        email: 'test@test.com',
        img: 'abc',
        address: {
          community: 'uno',
          province: 'dos',
        },
        psw: '12346789',
        rPsw: '123456789',
      };
      spyOn(component.apiUser, 'updateUser').and.returnValue(
        of({
          _id: 'test',
          name: 'test1',
          email: 'test1@test.com',
          img: 'abc',
          address: { community: 'uno', province: 'dos' },
          psw: '1234567890',
          routes: [],
        })
      );

      fixture.detectChanges();
      component.handleSubmitUpdate();

      expect(component.errorMessage).toBe('Las contraseñas deben ser iguales');
    });
  });

  describe('When handleSubmitUpdate is called with valid email, valid psw', () => {
    it('should call dispatch', () => {
      component.user = {
        user: {
          _id: 'test',
          name: 'test1',
          email: 'test1@test.com',
          img: 'abc',
          address: { community: 'uno', province: 'dos' },
          psw: '1234567890',
          routes: [],
        },
        token: 'token',
      };

      component.updatedUserData = {
        name: 'test',
        email: 'test@test.com',
        img: 'abc',
        address: {
          community: 'uno',
          province: 'dos',
        },
        psw: '123456',
        rPsw: '123456',
      };
      spyOn(component.apiUser, 'updateUser').and.returnValue(
        of({
          _id: 'test',
          name: 'test1',
          email: 'test1@test.com',
          img: 'abc',
          address: { community: 'uno', province: 'dos' },
          psw: '1234567890',
          routes: [],
        })
      );

      fixture.detectChanges();
      component.handleSubmitUpdate();

      expect(component.errorMessage).toBe(
        'La contraseña debe tener más de 8 dígitos'
      );
    });
  });

  describe('When handleSubmitUpdate is called with valid email, valid psw', () => {
    it('should call dispatch', () => {
      component.user = {
        user: {
          _id: 'test',
          name: 'test1',
          email: 'test1@test.com',
          img: 'abc',
          address: { community: 'uno', province: 'dos' },
          psw: '1234567890',
          routes: [],
        },
        token: 'token',
      };

      component.updatedUserData = {
        name: 'test',
        email: 'test',
        img: 'abc',
        address: {
          community: 'uno',
          province: 'dos',
        },
        psw: '123456789',
        rPsw: '123456789',
      };
      spyOn(component.apiUser, 'updateUser').and.returnValue(
        of({
          _id: 'test',
          name: 'test1',
          email: 'test1@test.com',
          img: 'abc',
          address: { community: 'uno', province: 'dos' },
          psw: '1234567890',
          routes: [],
        })
      );

      fixture.detectChanges();
      component.handleSubmitUpdate();

      expect(component.errorMessage).toBe('El email no es válido');
    });
  });
});
