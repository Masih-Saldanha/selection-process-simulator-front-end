import { Component } from '@angular/core';
import { Observer } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-control-candidates',
  templateUrl: './control-candidates.component.html',
  styleUrls: ['./control-candidates.component.css']
})
export class ControlCandidatesComponent {
  constructor(private service: AppService) { }

  codCandidato: number | "" = "";
  message = "";

  onInput(inputElement: HTMLInputElement) {
    const value = parseInt(inputElement.value);
    if (value) {
      this.message = "";
    }

    this.codCandidato = value;
  }

  private handleResponse(successMessage: string): Observer<void> {
    return {
      next: res => {
        this.message = successMessage;
      },
      error: e => {
        this.message = e.error;
      },
      complete: () => { }
    };
  }

  disqualify() {
    if (!this.codCandidato) {
      return;
    }

    const observer = this.handleResponse(`Candidato com o código ${this.codCandidato} desqualificado com sucesso!`);
    this.service.disqualify(this.codCandidato).subscribe(observer);
  }

  schedule() {
    if (!this.codCandidato) {
      return;
    }

    const observer = this.handleResponse(`Candidato com o código ${this.codCandidato} qualificado com sucesso!`);
    this.service.schedule(this.codCandidato).subscribe(observer);
  }

  approve() {
    if (!this.codCandidato) {
      return;
    }

    const observer = this.handleResponse(`Candidato com o código ${this.codCandidato} aprovado com sucesso!`);
    this.service.approve(this.codCandidato).subscribe(observer);
  }
}
