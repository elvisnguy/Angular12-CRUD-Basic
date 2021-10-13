import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailPageComponent } from './containers/users-detail-page/users-detail-page.component';
import { UsersPageComponent } from './containers/users-page/users-page.component';

const routes: Routes = [
  {
    path: '',
    component: UsersPageComponent,
  },
  {
    path: ':userId',
    component: UserDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
