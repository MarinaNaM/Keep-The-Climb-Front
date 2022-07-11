import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iUser } from '../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:3400/user/';
  }

  addUser(user: iUser): Observable<{ user: iUser; token: string }> {
    return this.http.post(this.apiUrl, user) as Observable<{
      user: iUser;
      token: string;
    }>;
  }

  loginUser(
    email: iUser['email'],
    psw: iUser['psw']
  ): Observable<{ user: iUser; token: string }> {
    return this.http.post(this.apiUrl + 'login', {
      email,
      psw,
    }) as Observable<{ user: iUser; token: string }>;
  }

  getUser(id: iUser['_id']): Observable<iUser> {
    return this.http.get(this.apiUrl + id) as Observable<iUser>;
  }

  updateUser(user: iUser): Observable<iUser> {
    return this.http.patch(this.apiUrl + user._id, user) as Observable<iUser>;
  }

  deleteUser(): Observable<iUser> {
    return this.http.delete(this.apiUrl) as Observable<iUser>;
  }
}
