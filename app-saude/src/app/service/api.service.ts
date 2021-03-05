import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getMedidasData(data): Observable<any> {
    return this.http.get<any>(
      `${environment.api}/colaboradors/${localStorage.getItem(
        'id'
      )}/medidas/${data}`,
      httpOptions
    );
  }

  updateMedida(medida): Observable<any> {
    return this.http.put<any>(
      `${environment.api}/colaboradors/${localStorage.getItem('id')}/medida`,
      medida,
      httpOptions
    );
  }

  postAvaliacaoCollab(avaliacao): Observable<any> {
    return this.http.put<any>(
      `${environment.api}/colaboradors/${localStorage.getItem(
        'id'
      )}/avaliacoes`,
      avaliacao,
      httpOptions
    );
  }

  getLastAvaliacaoCollab(): Observable<any> {
    return this.http.get<any>(
      `${environment.api}/colaboradors/${localStorage.getItem('id')}/avaliacao/ultima`,
      httpOptions
    );
  }

  getAvaliacaoCollabData(data): Observable<any> {
    //var filter = { dataHora: data };
    return this.http.get<any>(
      `${environment.api}/colaboradors/${localStorage.getItem(
        'id'
      )}/avaliacao/${data}`,
      httpOptions
    );
  }

}
