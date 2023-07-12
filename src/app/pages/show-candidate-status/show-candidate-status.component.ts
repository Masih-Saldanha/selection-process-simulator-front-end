import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { Observer } from 'rxjs';
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
  candidatoStatus = "";
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
      return;
    }

    const codCandidatoValue = parseInt(this.codCandidato?.value ?? "")
    const observer: Observer<string> = {
      next: res => {
        this.candidatoStatus = res;
      },
      error: e => {
        this.candidatoStatus = e.error;
      },
      complete: () => { }
    }
    this.service.status(codCandidatoValue).subscribe(observer);
  }
}
