import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { iSchool } from 'src/app/core/models/school-model';
import { iSector } from 'src/app/core/models/sector-model';
import { AppState } from 'src/app/store/app.state';

import { SectorsComponent } from './sectors.component';

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

describe('SectorsComponent', () => {
  let component: SectorsComponent;
  let fixture: ComponentFixture<SectorsComponent>;
  let initialState = mockInitialState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectorsComponent],
      providers: [
        SectorsComponent,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                id: '1',
              }),
            },
          },
        },
        provideMockStore({ initialState }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
