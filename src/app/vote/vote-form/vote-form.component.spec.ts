import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { iRoute } from 'src/app/core/models/route-model';
import { iUser } from 'src/app/core/models/user-model';
import { AppState } from 'src/app/store/app.state';

import { VoteFormComponent } from './vote-form.component';

const mockRoute: iRoute = {
  _id: '1',
  name: '',
  length: 0,
  grade: '',
  voteGrade: [{ user: '123456', vote: 1 }],
};

const mockInitialState: AppState = {
  schools: { schools: [] },
  sectors: { sectors: [] },
  routes: { routes: [mockRoute] },
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

describe('VoteFormComponent', () => {
  let component: VoteFormComponent;
  let fixture: ComponentFixture<VoteFormComponent>;
  let initialState = mockInitialState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [VoteFormComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(VoteFormComponent);
    component = fixture.componentInstance;
    component.route = mockRoute;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When saveVote is called', () => {
    it('if user has token and has not voted yet, should call dispatch', () => {
      const mockRoute: iRoute = {
        _id: '123',
        name: '',
        length: 0,
        grade: '',
        voteGrade: [{ user: '123', vote: 1 }],
      };
      const mockUser: iUser = {
        _id: '456',
        name: '',
        psw: '',
        email: '',
        address: {
          community: undefined,
          province: undefined,
        },
        routes: [{ route: mockRoute, isProject: false, isEnchain: true }],
      };
      component.user = { user: mockUser, token: 'token' };

      spyOn(component.userApi, 'loginUser').and.returnValue(
        of({ user: mockUser, token: 'token' })
      );
      spyOn(component.routeApi, 'voteRoute').and.returnValue(of(mockRoute));
      spyOn(component.store, 'dispatch');
      fixture.detectChanges();
      component.saveVote(2);

      expect(component.store.dispatch).toHaveBeenCalled();
    });
  });

  describe('When save vote is called without token', () => {
    it('should call navigate', () => {
      spyOn(component.routeTo, 'navigate');
      fixture.detectChanges();
      component.saveVote(2);

      expect(component.routeTo.navigate).toHaveBeenCalledWith(['login']);
    });
  });
});
