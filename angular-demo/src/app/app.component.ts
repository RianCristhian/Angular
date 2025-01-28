import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule
import { HttpClient } from '@angular/common/http'; // Importe o HttpClient

@Component({
  selector: 'app-root',
  standalone: true, // Certifique-se que o componente é standalone
  imports: [HttpClientModule], // Importe o HttpClientModule aqui
  template: `
    <h1>{{ mensagem }}</h1>
  `,
})
export class AppComponent implements OnInit {
  mensagem = 'Carregando...';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Realiza uma requisição GET ao backend
    this.http.get<{ mensagem: string }>('http://localhost:8080/Angular/api/mensagem')
      .subscribe(
        (data) => {
          this.mensagem = data.mensagem;
        },
        (error) => {
          this.mensagem = 'Carregando...';
        }
      );
  }
}
