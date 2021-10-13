import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { User } from '../../models';
import { UsersService } from '../../services';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './users-detail-page.component.html',
  styleUrls: ['./usesr-detail-page.component.scss'],
})
export class UserDetailPageComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          return this.usersService.getUserbyId(params.userId);
        })
      )
      .subscribe((res: any) => {
        this.user = res;
      });
  }

  onSaveUser(user: User): void {
    this.usersService.updateUser(user).subscribe((res: any) => {
      console.log(res, 'Update thành cong');
    });
  }
}

/**
 * Form, FormsModule, ReactiveFormsModule
 * ngModel, formControl, formGroup, validate data
 *
 * Smart components, dump component,
 * Input, output,
 *
 * Service, http, get, put, post, delete
 *
 * config router,  router guard (chua hoc)
 *
 * interface
 *
 * lazy loading
 */
