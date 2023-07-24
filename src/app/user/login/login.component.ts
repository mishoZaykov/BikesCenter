import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  email: string = '';
  password: string = '';

  constructor(private user: UserService) {}

  ngOnInit(): void {
    
  }

  login(){
    if(this.email == ''){
      alert('Enter email')
      return
    }

    if(this.password == ''){
      alert('Enter password')
      return
    }

    this.user.login(this.email, this.password);

    this.email = '';
    this.password = '';
  }
}
