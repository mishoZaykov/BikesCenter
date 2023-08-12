import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';

export function passwordsMatchValidator(): ValidatorFn {

  // Checks if passwords match
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return {
        passwordsDontMatch: true,
      };
    }
    return null;
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  // Creating a form group  
  signUpForm = this.fb.group(
    {
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },
    { validators: passwordsMatchValidator() }
  );

  constructor(
    private user: UserService,
    private router: Router,
    private toast: HotToastService,
    private fb: NonNullableFormBuilder
  ) {}

  ngOnInit(): void {}

  // Getting name from form group
  get name() {
    return this.signUpForm.get('name');
  }

  // Getting email from form group
  get email() {
    return this.signUpForm.get('email');
  }

  // Getting password from form group
  get password() {
    return this.signUpForm.get('password');
  }

  // Getting confirmPassword from form group
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  // Submitting the form 
  submit() {
    const { name, email, password } = this.signUpForm.value;

    if (!this.signUpForm.valid || !name || !email || !password) {
      return;
    }

    this.user
      .register(email, password)
      .pipe(
        switchMap(({ user: { uid } }) =>
          this.user.addUser({ uid, email, displayName: name })
        ),
        this.toast.observe({
          success: 'You are signed up',
          loading: 'Signing in...',
          error: ({ message }) => `${message}`,
        })
      )
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }
}
