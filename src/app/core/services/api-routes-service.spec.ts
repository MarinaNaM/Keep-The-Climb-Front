import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { iRoute } from '../models/route-model';
import { ApiRoutesService } from './api-routes-service';

describe('UsersService', () => {
  const mockRoute: iRoute = {
    _id: '123456',
    name: 'route-test',
    length: 2,
    grade: '6a',
    voteGrade: [
      {
        user: '123',
        vote: 2,
      },
    ],
  };

  let service: ApiRoutesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiRoutesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When calling service.getRoutes', () => {
    it('Should call httpClient', () => {
      service.getRoutes().subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toBe(JSON.stringify(mockRoute));
      });

      const req = httpTestingController.expectOne({
        url: 'http://localhost:3453/route/',
        method: 'GET',
      });

      expect(req.request.url).toBe('http://localhost:3453/route/');

      req.flush(mockRoute);
    });
  });

  describe('When calling service.getRoute', () => {
    it('Should call httpClient', () => {
      service.getRoute('id').subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toBe(JSON.stringify(mockRoute));
      });

      const req1 = httpTestingController.expectOne({
        url: 'http://localhost:3453/route/id',
        method: 'GET',
      });

      expect(req1.request.url).toBe('http://localhost:3453/route/id');

      req1.flush(mockRoute);
    });
  });

  describe('When calling service.voteRoute', () => {
    it('should call httpClient', () => {
      service.voteRoute('id', mockRoute).subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toBe(JSON.stringify(mockRoute));
      });

      const req1 = httpTestingController.expectOne({
        url: 'http://localhost:3453/route/voteRoute/id',
        method: 'PATCH',
      });

      expect(req1.request.url).toBe('http://localhost:3453/route/voteRoute/id');

      req1.flush(mockRoute);
    });
  });
});
