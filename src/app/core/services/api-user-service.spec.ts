import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
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
        url: 'http://localhost:3453/user/',
        method: 'POST',
      });

      expect(req.request.url).toBe('http://localhost:3453/user/');

      req.flush(mockUser);
    });
  });
  describe('When calling service.loginUser with email and password', () => {
    it('Should call httpClient', () => {
      service
        .loginUser({ email: mockUser.email, psw: mockUser.psw })
        .subscribe((res) => {
          expect(res).not.toBeNull();
          expect(JSON.stringify(res)).toBe(JSON.stringify(mockUser));
        });

      const req2 = httpTestingController.expectOne({
        url: 'http://localhost:3453/user/login',
        method: 'POST',
      });

      expect(req2.request.url).toBe('http://localhost:3453/user/login');

      req2.flush(mockUser);
    });
  });
  describe('When calling service.loginUser with token', () => {
    it('Should call httpClient', () => {
      service.loginUser(undefined, 'token').subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toBe(JSON.stringify(mockUser));
      });

      const req2 = httpTestingController.expectOne({
        url: 'http://localhost:3453/user/login',
        method: 'POST',
      });

      expect(req2.request.url).toBe('http://localhost:3453/user/login');

      req2.flush(mockUser);
    });
  });
  describe('When calling service.loginUser without arguments', () => {
    it('Should return an empty object', () => {
      const result = service.loginUser();
      expect(result).toEqual(
        {} as Observable<{
          user: iUser;
          token: string;
        }>
      );
    });
  });
  describe('When calling service.getUser', () => {
    it('Should call httpClient', () => {
      service.getUser('id').subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toBe(JSON.stringify(mockUser));
      });

      const req3 = httpTestingController.expectOne({
        url: 'http://localhost:3453/user/id',
        method: 'GET',
      });

      expect(req3.request.url).toBe('http://localhost:3453/user/id');

      req3.flush(mockUser);
    });
  });
  describe('When calling service.updateUser', () => {
    it('should call httpClient', () => {
      const mockToken = 'token';
      service.updateUser('id', mockUser, mockToken).subscribe((res) => {
        expect(res).not.toBeNull();
        expect(JSON.stringify(res)).toBe(JSON.stringify(mockUser));
      });

      const req4 = httpTestingController.expectOne({
        url: 'http://localhost:3453/user/id',
        method: 'PATCH',
      });

      expect(req4.request.url).toBe('http://localhost:3453/user/id');

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
        url: 'http://localhost:3453/user/',
        method: 'DELETE',
      });

      expect(req5.request.url).toBe('http://localhost:3453/user/');

      req5.flush(mockUser);
    });
  });
});
