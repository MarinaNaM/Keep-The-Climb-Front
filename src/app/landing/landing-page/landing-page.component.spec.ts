import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { iUser } from 'src/app/core/models/user-model';
import { AppState } from 'src/app/store/app.state';
import { LandingPageComponent } from './landing-page.component';

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

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let initialState = mockInitialState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [LandingPageComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When landing page is loaded', () => {
    it('should be call store.dispatch, saveToken and navigate', () => {
      fixture = TestBed.createComponent(LandingPageComponent);
      component = fixture.componentInstance;
      spyOn(component.localStorage, 'getToken').and.returnValue('token');
      spyOn(component.userApi, 'loginUser').and.returnValue(
        of({ user: {} as iUser, token: 'token' })
      );
      spyOn(component.store, 'dispatch');
      spyOn(component.localStorage, 'saveToken');
      spyOn(component.router, 'navigate');
      fixture.detectChanges();

      expect(component.store.dispatch).toHaveBeenCalled();
      expect(component.localStorage.saveToken).toHaveBeenCalled();
      expect(component.router.navigate).toHaveBeenCalled();
    });
  });
});
