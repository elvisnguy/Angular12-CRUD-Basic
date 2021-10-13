import { Component, OnInit } from '@angular/core';

import { User } from '../../models';
import { UsersService } from '../../services';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  users: Array<User> = [];
  user: User;

  constructor(private usersService: UsersService) {}

  // smart component
  ngOnInit(): void {
    this.usersService.getUsers().subscribe((res: Array<any>) => {
      this.users = res;
    });
  }

  deleteUser(userId)
  {
    this.usersService.deleteUsers(userId).subscribe(()=> {
      console.log("xóa thành công",userId);
    })
  }

  createUser(user)
  {
    this.usersService.createUsers(user).subscribe((res)=> {
      console.log("Receive",user)
    })
  }
}
