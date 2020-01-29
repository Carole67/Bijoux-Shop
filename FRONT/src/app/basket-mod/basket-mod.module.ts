import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { BasketModRoutingModule } from './basket-mod-routing.module';
import { BasketComponent } from './basket/basket.component';


@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,   
    BasketModRoutingModule
  ],
  bootstrap: [BasketComponent]
})
export class BasketModModule { }
