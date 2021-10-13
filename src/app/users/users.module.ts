import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersPageComponent } from './containers/users-page/users-page.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserDetailPageComponent } from './containers/users-detail-page/users-detail-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserCreateComponent } from './components/user-create/user-create.component';


@NgModule({
  declarations: [
    UsersPageComponent,
    UserTableComponent,
    UserFormComponent,
    UserDetailPageComponent,
    UserCreateComponent

  ],
  imports: [CommonModule, ReactiveFormsModule, UsersRoutingModule],
})
export class UsersModule {}
