import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AplicationService {

  constructor(private http: HttpClient) { }

  get(query: string): Observable<any> {
    const url = `${environment.API_URL}${query}`;
    return this.http.get<any>(url);
  }
  
  post(query: string, data): Observable<any> {
    const url = `${environment.API_URL}${query}`;
    return this.http.post<any>(url, data);
  }

  delete(query: string): Observable<any> {
    const url = `${environment.API_URL}${query}`;
    return this.http.delete<any>(url);
  }
}
