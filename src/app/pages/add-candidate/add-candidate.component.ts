import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  candidateForm = this.fb.group({
    nome: ['', [Validators.required]],
  });

  get nome() {
    return this.candidateForm.get('nome');
  }

  submitCandidateName(): void {
    if (this.candidateForm.invalid) {
      console.log("Formulário inválido!");
      return;
    }

    // LÓGICA DE SERVICE AQUI
    console.log(this.candidateForm.value)
  }
}
