import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  // Creating login form group 
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private user: UserService,
    private router: Router,
    private toast: HotToastService,
    private fb: NonNullableFormBuilder
  ) {}

  ngOnInit(): void {}

  // Getting email from form group
  get email() {
    return this.loginForm.get('email');
  }

  // Getting password from form group
  get password() {
    return this.loginForm.get('password');
  }

  // Submitting the form
  submit() {
    const { email, password } = this.loginForm.value;

    if (!this.loginForm.valid || !email || !password) {
      return;
    }

    this.user
      .login(email, password)
      .pipe(
        this.toast.observe({
          success: 'Loggin Successfull',
          loading: 'Logging in...',
          error: ({ message }) => `${message}`,
        })
      )
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }
}
