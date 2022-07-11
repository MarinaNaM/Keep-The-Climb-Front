import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iSchool } from '../models/school-model';

@Injectable({
  providedIn: 'root',
})
export class ApiSchoolsService {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:3453/school/';
  }

  getSchools(): Observable<Array<iSchool>> {
    return this.http.get(this.apiUrl) as Observable<Array<iSchool>>;
  }

  getSchool(id: iSchool['_id']): Observable<iSchool> {
    return this.http.get(this.apiUrl + id) as Observable<iSchool>;
  }
}
