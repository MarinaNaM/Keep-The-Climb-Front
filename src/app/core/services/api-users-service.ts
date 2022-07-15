import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iUser } from '../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class ApiUsersService {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:3453/user/';
  }

  addUser(user: iUser): Observable<{ user: iUser; token: string }> {
    return this.http.post(this.apiUrl, user) as Observable<{
      user: iUser;
      token: string;
    }>;
  }

  loginUser(
    loginData?: {
      email: iUser['email'];
      psw: iUser['psw'];
    },
    token?: string
  ): Observable<{ user: iUser; token: string }> {
    if (loginData) {
      return this.http.post(this.apiUrl + 'login', loginData) as Observable<{
        user: iUser;
        token: string;
      }>;
    } else if (token) {
      return this.http.post(
        this.apiUrl + 'login',
        {},
        {
          headers: { Authorization: 'Bearer ' + token },
        }
      ) as Observable<{
        user: iUser;
        token: string;
      }>;
    } else {
      return {} as Observable<{
        user: iUser;
        token: string;
      }>;
    }
  }

  getUser(id: iUser['_id']): Observable<iUser> {
    return this.http.get(this.apiUrl + id) as Observable<iUser>;
  }

  updateUser(
    id: iUser['_id'],
    user: Partial<iUser>,
    token: string
  ): Observable<iUser> {
    return this.http.patch(this.apiUrl + id, user, {
      headers: { Authorization: 'bearer ' + token },
    }) as Observable<iUser>;
  }

  deleteUser(): Observable<iUser> {
    return this.http.delete(this.apiUrl) as Observable<iUser>;
  }
}
