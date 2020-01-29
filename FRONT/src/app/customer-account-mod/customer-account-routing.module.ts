import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
import { CompteComponent } from './compte/compte.component';
import { LoginComponent } from './login/login.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  { path: 'signUp', component: CompteComponent },
  { path: 'signIn', component: LoginComponent },
  { path: 'myAccount', component: UserUpdateComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerAccountRoutingModule { }
