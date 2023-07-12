import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observer } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent {
  constructor(
    private fb: FormBuilder,
    private service: AppService
  ) { }

  codCandidato: string | number = "";
  candidateForm = this.fb.group({
    nome: ['', [Validators.required]],
  });

  get nome() {
    return this.candidateForm.get('nome');
  }

  submitCandidateName(): void {
    if (this.candidateForm.invalid) {
      return;
    }

    const nomeValue = this.nome?.value ?? "";
    const observer: Observer<number> = {
      next: res => {
        this.codCandidato = res;
      },
      error: e => {
        this.codCandidato = e.error;
      },
      complete: () => { }
    }

    this.service.start(nomeValue).subscribe(observer);
  }
}
