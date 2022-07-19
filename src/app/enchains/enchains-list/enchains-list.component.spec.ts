import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { iRoute } from 'src/app/core/models/route-model';
import { AppState } from 'src/app/store/app.state';

import { EnchainsListComponent } from './enchains-list.component';

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

  describe('When calling media votes', () => {
    it('should does media of votes', () => {
      const mockRoute: iRoute = {
        name: '',
        length: 0,
        grade: '',
        voteGrade: [
          {
            user: '',
            vote: 1,
          },
          {
            user: '',
            vote: 3,
          },
        ],
      };
      fixture.detectChanges();
      const result = component.mediaVotes(mockRoute);

      expect(result).toBe('4');
    });
  });

  describe('When calling media votes without votes', () => {
    it('should return a string', () => {
      const mockRoute: iRoute = {
        name: '',
        length: 0,
        grade: '',
        voteGrade: [],
      };
      fixture.detectChanges();
      const result = component.mediaVotes(mockRoute);

      expect(result).toBe('Sin votos');
    });
  });
});
