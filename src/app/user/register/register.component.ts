import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private user: UserService) {}

  ngOnInit(): void {}

  register(){

    if(this.email == ''){
      alert('Please Enter email')
      return
    }


    if(this.password == ''){
      alert('Please Enter password')
      return
    }

    this.user.register(this.email, this.password);
    
    this.email = '';
    this.password = '';
  }
}
