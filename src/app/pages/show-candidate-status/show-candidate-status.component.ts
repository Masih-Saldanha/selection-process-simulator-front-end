import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-show-candidate-status',
  templateUrl: './show-candidate-status.component.html',
  styleUrls: ['./show-candidate-status.component.css']
})
export class ShowCandidateStatusComponent {
  constructor(
    private fb: FormBuilder,
    private service: AppService
  ) { }

  candidateForm = this.fb.group({
    codCandidato: ['', [Validators.required, this.integerValidator()]],
  });

  get codCandidato() {
    return this.candidateForm.get('codCandidato');
  }

  private integerValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (value && !Number.isInteger(Number(value))) {
        return { pattern: true };
      }
      return null;
    };
  }

  submitCandidadateCod(): void {
    if (this.candidateForm.invalid) {
      console.log("Formulário Inválido!");
      return;
    }
    // LÓGICA DE SERVICE AQUI
    console.log(this.candidateForm.value)
  }
}
