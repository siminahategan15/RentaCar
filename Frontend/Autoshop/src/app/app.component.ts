import { Component, EventEmitter, Input } from '@angular/core';
import { IUser } from './users/models/user';
import { UsersService } from './users/services/users.service';
import { LoginService } from './login/services/login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='Rent a car';
  logged_user: IUser | null = null;
constructor(private router:Router, private auth:LoginService){
  this.auth.loginEvent.subscribe((user) => 
    this.logged_user = user);
}
logout(): void {
  this.auth.logout();
 

}

    
   
}
