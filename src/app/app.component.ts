import { Component } from '@angular/core';
import { Productsservices } from './Services/productsservices.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'PeninsularTask';
  cartCount:number
  constructor(
   private service:Productsservices
  ){

  }
  ngOnInit(){
    this.getCartCount()
  }
getCartCount(){
  this.service.cart.subscribe(cou=>{
    this.cartCount=cou.length
  })
}
}
