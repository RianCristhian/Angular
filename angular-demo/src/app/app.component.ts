import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule], // Importe aqui o HttpClientModule
  template: `
    <h1>{{ mensagem }}</h1>
  `,
})
export class AppComponent {
  mensagem = 'Carregando...';

  constructor() {}
}
