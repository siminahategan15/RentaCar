import { Component } from '@angular/core';
import { IUser } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent {

  user!: IUser;
  constructor(private UserService:UsersService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.getUser();
  }
  getUser()
  {
    const id=this.route.snapshot.params['id'];
    this.UserService.getUser(id).subscribe(response => this.user = response);
  }
}
