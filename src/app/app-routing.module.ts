import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListproductsComponent } from './Products/listproducts/listproducts.component';

const routes: Routes = [

  {
    path: '', redirectTo: '/productlist', pathMatch: 'full',
  },
  {path:'productlist',component:ListproductsComponent},

  {
    path: 'product',
    loadChildren: () => import('./Productmodule/product.module').then(mod => mod.ProductModule)
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
