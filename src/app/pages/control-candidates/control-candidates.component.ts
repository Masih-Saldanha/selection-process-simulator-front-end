import { Component } from '@angular/core';

@Component({
  selector: 'app-control-candidates',
  templateUrl: './control-candidates.component.html',
  styleUrls: ['./control-candidates.component.css']
})
export class ControlCandidatesComponent {
  codCandidato: number | "" = "";
  errorMessage = "";

  onInput(inputElement: HTMLInputElement) {
    const value = parseInt(inputElement.value);
    if (value) {
      this.errorMessage = "";
    }

    this.codCandidato = value;
  }

  disqualify() {
    console.log(this.codCandidato);

    // IMPLEMENTAR LÓGICA DE REQUISIÇÃO E DE MENSAGEM DE ERRO
  }

  schedule() {
    console.log(this.codCandidato);

    // IMPLEMENTAR LÓGICA DE REQUISIÇÃO E DE MENSAGEM DE ERRO
  }

  approve() {
    console.log(this.codCandidato);

    // IMPLEMENTAR LÓGICA DE REQUISIÇÃO E DE MENSAGEM DE ERRO
  }
}
