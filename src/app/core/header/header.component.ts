import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private user: UserService){}

  get isLogedIn(): boolean{
   return this.user.isLogedIn;
 }


  logout(){
    this.user.logout()
  }
}
