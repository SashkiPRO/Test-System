import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {DetailsComponent} from "./details/details.component";
import {PostsComponent} from "./posts/posts.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path:'',
    component:UsersComponent
  },
  {
    path:'details/:id',
    component:DetailsComponent
  },
  { path: 'login',
    component: LoginComponent },
  { path: 'add-user',
    component: AddUserComponent },
  {
    path:'posts',
    component:PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
