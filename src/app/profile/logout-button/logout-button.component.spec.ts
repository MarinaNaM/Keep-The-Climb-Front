import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/app.state';

import { LogoutButtonComponent } from './logout-button.component';

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
            voteGrade: [{ user: '123456', vote: 1 }],
          },
          isProject: false,
          isEnchain: true,
        },
      ],
    },
    token: '',
  },
};

describe('LogoutButtonComponent', () => {
  let component: LogoutButtonComponent;
  let fixture: ComponentFixture<LogoutButtonComponent>;
  let initialState = mockInitialState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LogoutButtonComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When handleLogout is called', () => {
    it('should call dispatch, localStorage and navigate', () => {
      spyOn(component.store, 'dispatch');
      spyOn(component.localStorage, 'clearToken');
      spyOn(component.routerTo, 'navigate');

      fixture.detectChanges();

      component.handleLogout();

      expect(component.store.dispatch).toHaveBeenCalled();
      expect(component.localStorage.clearToken).toHaveBeenCalled();
      expect(component.routerTo.navigate).toHaveBeenCalled();
    });
  });
});
