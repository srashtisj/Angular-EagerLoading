import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
import { UserUpdateComponent } from './user-update/user-update.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: UserComponent
  // }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserComponent, UserUpdateComponent],
  exports: [RouterModule]
})
export class UserModule { }
