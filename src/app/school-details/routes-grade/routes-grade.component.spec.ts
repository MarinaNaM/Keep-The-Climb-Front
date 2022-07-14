import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { iRoute } from 'src/app/core/models/route-model';
import { iSchool } from 'src/app/core/models/school-model';
import { iSector } from 'src/app/core/models/sector-model';
import { RoutesCardComponent } from 'src/app/sector/routes-card/routes-card.component';
import { AppState } from 'src/app/store/app.state';

import { RoutesGradeComponent } from './routes-grade.component';

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

describe('RoutesGradeComponent', () => {
  let component: RoutesGradeComponent;
  let fixture: ComponentFixture<RoutesGradeComponent>;
  let initialState = mockInitialState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [RoutesGradeComponent],
      providers: [
        RoutesGradeComponent,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                id: '123',
              }),
            },
          },
        },
        provideMockStore({ initialState }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutesGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When call routes count', () => {
    it('should count the routes', () => {
      const arrSec: Array<iSector> = [
        {
          name: '',
          img: '',
          hoursSun: 'mañana',
          localization: {
            lat: 0,
            lng: 0,
          },
          routes: [
            {
              name: '',
              length: 0,
              grade: '',
              voteGrade: [{ user: '', vote: 1 }],
            },
          ],
        },
      ];

      const result = component.routesCount(arrSec);

      expect(result).toBe(1);
    });
  });
});
