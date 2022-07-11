import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { iUser } from '../models/user-model';
import { ApiUsersService } from './api-users-service';

describe('UsersService', () => {
  const mockUser: iUser = {
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
      { route: '123456789012345678901234', isProject: false, isEnchain: false },
    ],
  };

  let service: ApiUsersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiUsersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When calling service.create', () => {
    it('Should call httpClient', () => {
      service.addUser(mockUser).subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toBe(JSON.stringify(mockUser));
      });

      const req = httpTestingController.expectOne({
        url: 'http://localhost:3400/user/',
        method: 'POST',
      });

      expect(req.request.url).toBe('http://localhost:3400/user/');

      req.flush(mockUser);
    });
  });
  describe('When calling service.loginUser', () => {
    it('Should call httpClient', () => {
      service.loginUser(mockUser.email, mockUser.psw).subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toBe(JSON.stringify(mockUser));
      });

      const req2 = httpTestingController.expectOne({
        url: 'http://localhost:3400/user/login',
        method: 'POST',
      });

      expect(req2.request.url).toBe('http://localhost:3400/user/login');

      req2.flush(mockUser);
    });
  });
  describe('When calling service.getUser', () => {
    it('Should call httpClient', () => {
      service.getUser('id').subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toBe(JSON.stringify(mockUser));
      });

      const req3 = httpTestingController.expectOne({
        url: 'http://localhost:3400/user/id',
        method: 'GET',
      });

      expect(req3.request.url).toBe('http://localhost:3400/user/id');

      req3.flush(mockUser);
    });
  });
  describe('When calling service.updateUser', () => {
    it('should call httpClient', () => {
      service.updateUser('id', mockUser).subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toBe(JSON.stringify(mockUser));
      });

      const req4 = httpTestingController.expectOne({
        url: 'http://localhost:3400/user/id',
        method: 'PATCH',
      });

      expect(req4.request.url).toBe('http://localhost:3400/user/id');

      req4.flush(mockUser);
    });
  });
  describe('When calling service.deleteUser', () => {
    it('should call httpClient', () => {
      service.deleteUser().subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toBe(JSON.stringify(mockUser));
      });

      const req5 = httpTestingController.expectOne({
        url: 'http://localhost:3400/user/',
        method: 'DELETE',
      });

      expect(req5.request.url).toBe('http://localhost:3400/user/');

      req5.flush(mockUser);
    });
  });
});
