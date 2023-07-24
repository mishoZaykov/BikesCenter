import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  userLoggedIn : boolean = false;

  constructor(private user: UserService){}

  ngOnInit(): void {
    this.userLoggedIn = this.user.isLoogedIn()
  }

  isDisabled: boolean = true;

  logout(){
    this.user.logout()
  }
}
