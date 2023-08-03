import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AbstractControl, FormControl, FormGroup , ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if(password && confirmPassword && password !== confirmPassword) {
      return {
        passwordsDontMatch: true
      }
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

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, {validators: passwordsMatchValidator()})


  constructor(private user: UserService, private router: Router) {}

  ngOnInit(): void {}

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }
  
  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

    submit(){
      if(!this.signUpForm.valid) return;

      const {name, email, password} = this.signUpForm.value
      this.user.register(name!, email!, password!).subscribe(
        () => {
          alert('Registration Successful');
          this.router.navigate(['/home']);
        },
        (err) => {
          alert(err.message);
          this.router.navigate(['/register'])
        }
      )
    }

}
