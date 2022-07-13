import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from '../services/local-storage-service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When calling service.getToken', () => {
    it('Should call localStorage.getItem', () => {
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify('token'));

      service.getToken();
      expect(localStorage.getItem).toHaveBeenCalled;
    });
  });
  describe('When calling service.getToken', () => {
    it('Should call localStorage.getItem', () => {
      spyOn(localStorage, 'getItem').and.returnValue(null);

      service.getToken();
      expect(localStorage.getItem).toHaveBeenCalled;
    });
  });

  describe('When calling service.saveToken and there already is a token', () => {
    it('Should call localStorage.setItem', () => {
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify('token'));
      spyOn(localStorage, 'setItem');

      service.saveToken('token');
      expect(localStorage.getItem).toHaveBeenCalled;
      expect(localStorage.setItem).not.toHaveBeenCalled;
    });
  });

  describe('When calling service.saveToken and no token is saved yet', () => {
    it('Should call localStorage.setItem', () => {
      spyOn(localStorage, 'getItem').and.returnValue(null);
      spyOn(localStorage, 'setItem');

      service.saveToken('token');
      expect(localStorage.getItem).toHaveBeenCalled;
      expect(localStorage.setItem).toHaveBeenCalled;
    });
  });

  describe('When calling service.clearToken and no token is saved yet', () => {
    it('Should call localStorage.removeItem', () => {
      spyOn(localStorage, 'removeItem');

      service.clearToken();
      expect(localStorage.removeItem).toHaveBeenCalled;
    });
  });
});
