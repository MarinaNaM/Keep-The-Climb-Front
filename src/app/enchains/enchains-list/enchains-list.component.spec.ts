import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { iUserState } from 'src/app/core/models/user-model';
import { AppState } from 'src/app/store/app.state';

import { EnchainsListComponent } from './enchains-list.component';

const mockUser: iUserState = {
  user: {
    _id: '123456789012345678901234',
    name: '',
    psw: '',
    email: '',
    address: {},
    routes: [
      {
        route: {
          _id: '123456789012345678901234',
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
};

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

describe('EnchainsListComponent', () => {
  let component: EnchainsListComponent;
  let fixture: ComponentFixture<EnchainsListComponent>;
  let initialState = mockInitialState;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnchainsListComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(EnchainsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
