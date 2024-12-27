import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.scss']
})
export class LoginAppComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialisieren des Formulars
    this.loginForm = this.fb.group({
      username: ['', Validators.required], // Benutzername ist erforderlich
      password: ['', [Validators.required, Validators.minLength(2)]] // Passwort ist erforderlich, mindestens 2 Zeichen
    });
  }

  // Methode zum Behandeln der Formularübermittlung
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      // Fügen Sie hier Ihre Login-Logik hinzu
    } else {
      console.log('Form is invalid');
    }
  }
}
