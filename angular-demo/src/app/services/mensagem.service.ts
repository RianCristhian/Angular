import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MensagemService {
  private apiUrl = 'http://localhost:8080/api/mensagem';

  constructor(private http: HttpClient) {}

  getMensagem(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
