import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  // Benutzerdefinierte Validator-Funktion
  passwordMatchValidator(group: FormGroup): { [key: string]: any } | null {
    const password = group.get('password')?.value;
    const passwordConfirm = group.get('passwordConfirm')?.value;
    return password === passwordConfirm ? null : { passwordMismatch: true };
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Registration successful', this.registrationForm.value);
      // Weitere Logik für die Registrierung (z. B. API-Aufruf)
    } else {
      console.log('Form is invalid');
    }
  }
}
