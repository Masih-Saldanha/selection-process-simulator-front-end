import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }
  url = "http://localhost:8080/api/v1/hiring";

  start(nome: string): Observable<number> {
    const requestBody = { nome };
    return this.http.post<number>(`${this.url}/start`, requestBody);
  }

  status(codCandidato: number): Observable<string> {
    return this.http.get(`${this.url}/status/candidate/${codCandidato}`, { responseType: 'text' });
  }

  approved(): Observable<string[]> {
    return this.http.get<string[]>(`${this.url}/approved`);
  }

  disqualify(codCandidato: number): Observable<void> {
    const requestBody = { codCandidato };
    return this.http.post<void>(`${this.url}/disqualify`, requestBody);
  }

  schedule(codCandidato: number): Observable<void> {
    const requestBody = { codCandidato };
    return this.http.post<void>(`${this.url}/schedule`, requestBody);
  }

  approve(codCandidato: number): Observable<void> {
    const requestBody = { codCandidato };
    return this.http.post<void>(`${this.url}/approve`, requestBody);
  }
}