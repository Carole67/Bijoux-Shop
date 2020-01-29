import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import { BasketComponent } from './basket/basket.component';

const routes: Routes = [
  { path: '', component:  BasketComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BasketModRoutingModule { }
