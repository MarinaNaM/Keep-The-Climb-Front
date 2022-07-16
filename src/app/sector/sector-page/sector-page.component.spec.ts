import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { iSector } from 'src/app/core/models/sector-model';
import { AppState } from 'src/app/store/app.state';

import { SectorPageComponent } from './sector-page.component';

const mockSector: iSector = {
  _id: '123',
  name: '',
  img: '',
  hoursSun: 'mañana',
  localization: {
    lat: 0,
    lng: 0,
  },
  routes: [],
};

const mockInitialState: AppState = {
  schools: { schools: [] },
  sectors: { sectors: [mockSector] },
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

describe('SectorPageComponent', () => {
  let component: SectorPageComponent;
  let fixture: ComponentFixture<SectorPageComponent>;
  let initialState = mockInitialState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [SectorPageComponent],
      providers: [
        SectorPageComponent,
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

    fixture = TestBed.createComponent(SectorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
