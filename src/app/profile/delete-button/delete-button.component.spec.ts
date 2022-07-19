import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { iUser, iUserState } from 'src/app/core/models/user-model';
import { AppState } from 'src/app/store/app.state';

import { DeleteButtonComponent } from './delete-button.component';

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

describe('DeleteButtonComponent', () => {
  let component: DeleteButtonComponent;
  let fixture: ComponentFixture<DeleteButtonComponent>;
  let initialState = mockInitialState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [DeleteButtonComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When handleDelete is called', () => {
    it('should call dispatch, localStorage and navigate', () => {
      component.user = { token: 'token' } as iUserState;
      spyOn(component.userApi, 'deleteUser').and.returnValue(of({} as iUser));
      spyOn(component.store, 'dispatch');
      spyOn(component.localStorage, 'clearToken');
      spyOn(component.routerTo, 'navigate');

      fixture.detectChanges();
      component.handleDelete();

      expect(component.userApi.deleteUser).toHaveBeenCalled();
      expect(component.store.dispatch).toHaveBeenCalled();
      expect(component.localStorage.clearToken);
      expect(component.routerTo.navigate).toHaveBeenCalledWith(['']);
    });
  });
});
