import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/users/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedInUser: IUser | null = null;
  loginEvent: EventEmitter<IUser | null> = new EventEmitter();;
  constructor(private router:Router) {
  }
   
  getLoggedUser(): IUser | null {
    return this.loggedInUser;
  }

  login(user: IUser) {
  
    this.loggedInUser = user;
    this.loginEvent.emit(user);
  }

  logout() {
    
    this.loggedInUser = null;
    this.loginEvent.emit(null); 
    this.router.navigate(['']);
  }



}

