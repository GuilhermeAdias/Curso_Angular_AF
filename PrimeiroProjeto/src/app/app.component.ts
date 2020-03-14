import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso Angular';

  meuNome = 'Guilherme';
  frameworlks = 'Angular, Spring, C#'

  value1;
  value2;
  valorTotal;

  constructor() {}

  calcularSoma(){
     this.valorTotal = Number(this.value1) + Number(this.value2);
  }
}
