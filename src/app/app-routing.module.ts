import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderproductsComponent } from './Products/orderproducts/orderproducts.component';
import { ListproductsComponent } from './Products/listproducts/listproducts.component';
import { AddproductsComponent } from './Products/addproducts/addproducts.component';

const routes: Routes = [
  {path:'',component:ListproductsComponent},
  {path:'productlist',component:ListproductsComponent},
  {path:'productadd',component:AddproductsComponent},
  {path:'productorder',component:OrderproductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
