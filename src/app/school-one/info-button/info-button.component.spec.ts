import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { iSchool } from 'src/app/core/models/school-model';
import { iSector } from 'src/app/core/models/sector-model';
import { AppState } from 'src/app/store/app.state';

import { InfoButtonComponent } from './info-button.component';

const mockSchool: iSchool = {
  _id: '123',
  name: 'school-test',
  img: 'src',
  period: 'mañana',
  localization: {
    lat: 1,
    lng: 2,
  },
  sectors: [{} as iSector],
};

const mockInitialState: AppState = {
  schools: { schools: [mockSchool] },
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

describe('InfoButtonComponent', () => {
  let component: InfoButtonComponent;
  let fixture: ComponentFixture<InfoButtonComponent>;
  let initialState = mockInitialState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [InfoButtonComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When the component is loaded', () => {
    it('should be find the id', () => {
      component.idSchool = '1243';

      fixture.detectChanges();
      expect(component.school?._id).toBeUndefined();
    });
  });
});
