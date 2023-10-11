import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IUser } from '../users/models/user';
import { UsersService } from '../users/services/users.service';
import { Route, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users!: IUser[];
    is_register:boolean=false;
    userName2:string='';
    password2:string='';
    email2:string='';
    firstName2:string='';
    lastName2:string='';


    constructor(private userService:UsersService, private router:Router, private auth:LoginService) {}
    ngOnInit(): void {
      this.userService.getUsers().subscribe(res => {
        this.users =res;
      console.log(res);
    }
      );
     }

  toggleRegistering()
  {
    this.is_register=!this.is_register;
  }

  goToLogin() {
    this.is_register = false;
  }

  onSubmit()
  {
    let logged_user:IUser={
      
      firstName:this.firstName2,
    lastName:this.lastName2,
    userName:this.userName2,
    password:this.password2,
    email:this.email2

    };
    if(this.is_register)
    {
     
    this.userService.createUser(logged_user).subscribe(
      (res) =>{ this.users.push(res) 
      this.auth.login(res);
      alert('User Logged Succesfully');
      this.router.navigate(['/cars']);
    });
  
     
    }else
    {
      
  
    const user_exists=this.users.find(u=>u.userName==logged_user.userName && u.password==logged_user.password);
    if(user_exists)
    {
      alert('User Logged Succesfully');
      this.auth.login(user_exists);
      this.router.navigate(['/cars']);
    }
    else{
    alert('Wrong Credentials');
    }

    }

    




  
  }


}
