import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store/app.state';

import { CarouselComponent } from './carousel.component';

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

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let initialState = mockInitialState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When select image is called with a number', () => {
    it('selected index should be the number ', () => {
      component.selectImage(1);
      expect(component.selectedIndex).toBe(1);
    });
  });
});
