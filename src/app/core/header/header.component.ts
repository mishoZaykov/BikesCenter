import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(public user: UserService, private router: Router){}

//   get isLogedIn(): boolean{
//    return this.user.isLogedIn;
//  }


  logout(){
    this.user.logout().subscribe(() => {
      this.router.navigate(['/home'])
    })
  }
}
