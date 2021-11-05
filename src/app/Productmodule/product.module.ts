import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductroutingRoutingModule } from './productrouting-routing.module';
import { AddproductsComponent } from '../Products/addproducts/addproducts.component'
import { OrderproductsComponent } from '../Products/orderproducts/orderproducts.component'
import{ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { NumbericDirective } from '../Directives/numberic.directive';

@NgModule({
  declarations: [
    AddproductsComponent,
    OrderproductsComponent,
    NumbericDirective
  ],
  imports: [
    CommonModule,
    ProductroutingRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule

  ]
})
export class ProductModule { }
