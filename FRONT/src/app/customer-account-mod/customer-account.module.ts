import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerAccountRoutingModule } from './customer-account-routing.module';
import {CompteComponent} from './compte/compte.component';
import { RecapComponent } from './recap/recap.component';
import { LoginComponent } from './login/login.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MustMatchDirective } from '../_helpers/must-match.directive';
import { UserUpdateComponent } from './user-update/user-update.component';

@NgModule({
  declarations: [
    CompteComponent,
    RecapComponent,
    LoginComponent,
    MustMatchDirective,
    UserUpdateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerAccountRoutingModule
  ]
})
export class CustomerAccountModule { }
