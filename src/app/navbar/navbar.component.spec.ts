import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AppState } from '../store/app.state';

import { NavbarComponent } from './navbar.component';

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

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let initialState = mockInitialState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When goHome method is called', () => {
    it('should be call navigate', () => {
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.goHome();

      expect(component.router.navigate).toHaveBeenCalled();
    });
  });

  describe('When goProfile method is called and have token', () => {
    it('should be call navigate', () => {
      component.token = 'token';
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.goProfile();

      expect(component.router.navigate).toHaveBeenCalledWith(['profile']);
    });
  });
  describe('When goProfile method is called and have not token', () => {
    it('should be call navigate', () => {
      component.token = '';
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.goProfile();

      expect(component.router.navigate).toHaveBeenCalledWith(['signIn']);
    });
  });
  describe('When goEnchain method is called and have token', () => {
    it('should be call navigate', () => {
      component.token = 'token';
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.goEnchain();

      expect(component.router.navigate).toHaveBeenCalledWith(['enchain']);
    });
  });
  describe('When goEnchain method is called and have not token', () => {
    it('should be call navigate', () => {
      component.token = '';
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.goEnchain();

      expect(component.router.navigate).toHaveBeenCalledWith(['signIn']);
    });
  });
  describe('When goProject method is called and have token', () => {
    it('should be call navigate', () => {
      component.token = 'token';
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.goProject();

      expect(component.router.navigate).toHaveBeenCalledWith(['project']);
    });
  });
  describe('When goProject method is called and have not token', () => {
    it('should be call navigate', () => {
      component.token = '';
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.goProject();

      expect(component.router.navigate).toHaveBeenCalledWith(['signIn']);
    });
  });
});
