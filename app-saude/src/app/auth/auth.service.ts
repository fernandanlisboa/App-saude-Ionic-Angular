import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(collab: any): Observable<any>{
    return this.http.post<any>(`${environment.api_colab}/colaboradors/login`, collab)
  }

  register(collab: any): Observable<any>{
    return this.http.post<any>(`${environment.api_colab}/colaboradors`, collab)
  }

  logout(): Observable<any>{
    return this.http.post<any>(`${environment.api_colab}/colaboradors/logout`, httpOptions)
  }

}
