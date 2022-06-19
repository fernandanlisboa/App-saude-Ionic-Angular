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
      `${environment.api_colab}/colaboradors/${localStorage.getItem(
        'id'
      )}/medidas/${data}`,
      httpOptions
    );
  }

  updateMedida(medida): Observable<any> {
    console.log('endpoint update')
    return this.http.put<any>(
      `${environment.api_colab}/colaboradors/${localStorage.getItem('id')}/medida`,
      medida,
      httpOptions
    );
  }

  postAvaliacaoCollab(avaliacao): Observable<any> {
    avaliacao.colaborador = localStorage.getItem('id');
    return this.http.post<any>(
      `${environment.api_avaliativo}/avaliacaos`,
      avaliacao,
      httpOptions
    );
  }

  getLastAvaliacaoCollab(): Observable<any> {
    return this.http.get<any>(
      `${environment.api_colab}/colaboradors/${localStorage.getItem('id')}/avaliacao/ultima`,
      httpOptions
    );
  }

  getAvaliacaoCollabData(data): Observable<any> {
    return this.http.get<any>(
      `${environment.api_colab}/colaboradors/${localStorage.getItem(
        'id'
      )}/avaliacao/${data}`,
      httpOptions
    );
  }

  getCollab(): Observable<any>{
    return this.http.get<any>(
      `${environment.api_colab}/colaboradors/${localStorage.getItem(
        'id'
      )}`,
      httpOptions
    )
  }

}
