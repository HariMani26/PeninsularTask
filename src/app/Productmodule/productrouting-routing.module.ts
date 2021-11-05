import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AddproductsComponent} from '../Products/addproducts/addproducts.component'
import{OrderproductsComponent} from '../Products/orderproducts/orderproducts.component'

const routes: Routes = [
  
  {path:'productadd',component:AddproductsComponent},
  {path:'productorder',component:OrderproductsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductroutingRoutingModule { }
