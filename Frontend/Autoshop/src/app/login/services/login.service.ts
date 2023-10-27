import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from 'src/app/users/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedInUser: IUser | null = null;
  private loggedInUserSubject: BehaviorSubject<IUser | null> = new BehaviorSubject<IUser | null>(null);
  loginEvent: EventEmitter<IUser | null> = new EventEmitter();;
  constructor(private router:Router) {
  }
   
  getUser(): IUser | null {
    const userData = localStorage.getItem('user');
    if (userData) {
      return JSON.parse(userData);
    }
    return null;
  }

  login(user: IUser) {
  
    this.loggedInUser = user;
    this.loginEvent.emit(user);
    localStorage.setItem('role', user.role);
    localStorage.setItem('idUser',user.idUser.toString());
  }

  logout() {
    
    this.loggedInUser = null;
    this.loginEvent.emit(null); 
    this.router.navigate(['']);
  }



}

