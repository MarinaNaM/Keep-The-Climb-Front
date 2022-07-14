import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { iRoute } from '../models/route-model';
import { iSector } from '../models/sector-model';
import { ApiSectorsService } from './api-sectors-service';

describe('UsersService', () => {
  const mockSector: iSector = {
    _id: '123456',
    name: 'sector-test',
    img: 'src',
    hoursSun: 'mañana',
    localization: {
      lat: 1234,
      lng: 5678,
    },
    routes: [] as Array<iRoute>,
  };

  let service: ApiSectorsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiSectorsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When calling service.getSectors', () => {
    it('Should call httpClient', () => {
      service.getSectors().subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toBe(JSON.stringify(mockSector));
      });

      const req = httpTestingController.expectOne({
        url: 'http://localhost:3453/sector/',
        method: 'GET',
      });

      expect(req.request.url).toBe('http://localhost:3453/sector/');

      req.flush(mockSector);
    });
  });

  describe('When calling service.getSector', () => {
    it('Should call httpClient', () => {
      service.getSector('id').subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toBe(JSON.stringify(mockSector));
      });

      const req = httpTestingController.expectOne({
        url: 'http://localhost:3453/sector/id',
        method: 'GET',
      });

      expect(req.request.url).toBe('http://localhost:3453/sector/id');

      req.flush(mockSector);
    });
  });
});
