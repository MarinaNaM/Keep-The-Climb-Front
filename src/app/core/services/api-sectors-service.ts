import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iSector } from '../models/sector-model';

@Injectable({
  providedIn: 'root',
})
export class ApiSectorsService {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:3453/sector/';
  }

  getSectors(): Observable<Array<iSector>> {
    return this.http.get(this.apiUrl) as Observable<Array<iSector>>;
  }

  getSector(id: iSector['_id']): Observable<iSector> {
    return this.http.get(this.apiUrl + id) as Observable<iSector>;
  }
}
