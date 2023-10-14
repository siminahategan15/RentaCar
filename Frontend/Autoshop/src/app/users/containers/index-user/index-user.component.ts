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
  isEditing: boolean = false;
  editingUser!: IUser ;

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


  updateUser()
  {
    if (this.editingUser) {
      this.userService.updateUser(this.editingUser.idUser, this.editingUser).subscribe(
        (res) => {
          const userIndex = this.users.findIndex((u) => u.idUser === this.editingUser.idUser);
          if (userIndex !== -1) {
            this.users[userIndex] = { ...this.users[userIndex], ...this.editingUser };
          }
          this.isEditing = false;
        },
        (error) => {
          // Handle errors, show a message, or log the error
          console.error('Error updating user:', error);
          this.isEditing = false;
        }
      );
    }
    
  }

 
  
    editUser(user: IUser): void {
      this.isEditing = true;
      this.editingUser = { ...user }; 
    }
    cancelUpdate(): void {
      this.isEditing = false;
    }
    
  }
   

