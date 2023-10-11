import { Component } from '@angular/core';
import { IUser } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-user',
  templateUrl: './index-user.component.html',
  styleUrls: ['./index-user.component.css']
})
export class IndexUserComponent {
  users!: IUser[];

  firstName2:string='';
  lastName2:string='';
  userName2:string='';
  password2:string='';
  email2:string='';

  constructor(private userService:UsersService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res => {
      this.users =res;
    console.log(res);
  }
    )
   }

   showUser(user: IUser)
   {
    this.router.navigate([`/users/${user.idUser}`]);
   }
  
  
   createUser() {
   
    let user:IUser={
      
      firstName:this.firstName2,
    lastName:this.lastName2,
    userName:this.userName2,
    password:this.password2,
    email:this.email2

    };

// this will be replaced with form value
  this.userService.createUser(user).subscribe(
    res => this.users.push(res), 
  );
}



  deleteUser(user: IUser)
  {
    this.userService.deleteUser(user.idUser).subscribe(
      (res: any)=> {
        const userIndex = this.users.indexOf(user);
        this.users.splice(userIndex,1);
      }
    )
  }


  updateUser(user:IUser)
  {
    const updatedUser: IUser = {
      firstName:this.firstName2,
      lastName:this.lastName2,
      userName:this.userName2,
      password:this.password2,
      email:this.email2
    };
  
    this.userService.updateUser(user.idUser, updatedUser).subscribe(
      res => {
        const userIndex = this.users.indexOf(user);
          this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
        
      }
    );
    } 
}
