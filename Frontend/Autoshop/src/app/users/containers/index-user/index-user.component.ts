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

  isEditing: boolean = false;
  editingUser!: IUser ;
  userRole:string|null='';

  roleOptions: string[] = ["admin", "user"];
  selectedRole?: string;
  
  constructor(private userService:UsersService, private router: Router) {
    this.userRole = localStorage.getItem('role');
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res => {
      this.users =res;
  });

   }

   showUser(user: IUser)
   {
    this.router.navigate([`/users/${user.idUser}`]);
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
      this.editingUser.role = this.selectedRole!;
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
    viewReservations(user: IUser) {
      this.router.navigate([`/users/reservations/${user.idUser}`]);
    }
    

  }
   

