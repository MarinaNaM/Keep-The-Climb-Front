import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iRoute } from '../models/route-model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:3453/route/';
  }

  getRoutes(): Observable<Array<iRoute>> {
    return this.http.get(this.apiUrl) as Observable<Array<iRoute>>;
  }

  getRoute(id: iRoute['_id']): Observable<iRoute> {
    return this.http.get(this.apiUrl + id) as Observable<iRoute>;
  }

  voteRoute(route: iRoute): Observable<iRoute> {
    return this.http.patch(
      this.apiUrl + 'voteRoute/' + route._id,
      route.voteGrade
    ) as Observable<iRoute>;
  }
}
