import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { iSchool } from '../models/school-model';
import { ApiSchoolsService } from './api-schools-service';

describe('UsersService', () => {
  const mockSchool: iSchool = {
    _id: '123456',
    name: 'School-test',
    img: 'src',
    period: 'mañana',
    localization: {
      lat: 123,
      lng: 456,
    },
    sectors: [{}],
  };

  let service: ApiSchoolsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiSchoolsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When calling service.getSchools', () => {
    it('Should call httpClient', () => {
      service.getSchools().subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toBe(JSON.stringify(mockSchool));
      });

      const req = httpTestingController.expectOne({
        url: 'http://localhost:3453/school/',
        method: 'GET',
      });

      expect(req.request.url).toBe('http://localhost:3453/school/');

      req.flush(mockSchool);
    });
  });

  describe('When calling service.getSchool', () => {
    it('Should call httpClient', () => {
      service.getSchool('id').subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toBe(JSON.stringify(mockSchool));
      });

      const req = httpTestingController.expectOne({
        url: 'http://localhost:3453/school/id',
        method: 'GET',
      });

      expect(req.request.url).toBe('http://localhost:3453/school/id');

      req.flush(mockSchool);
    });
  });
});
