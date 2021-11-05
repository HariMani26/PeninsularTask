import { Component, OnInit } from '@angular/core';
import { Productsservices } from 'src/app/Services/productsservices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orderproducts',
  templateUrl: './orderproducts.component.html',
  styleUrls: ['./orderproducts.component.css']
})
export class OrderproductsComponent implements OnInit {
  checkout: any[] = []
  constructor(
    private services: Productsservices,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.getCartDetials()

  }

  //Get the producat Details From List Component
  getCartDetials() {
    this.services.cart.subscribe(da => {
      this.checkout = da;
      console.log(this.checkout)
    })
  }

  //Remove Cart
  removeCart(index: number) {
    this.checkout.splice(index, 1)
    this.services.cartDetails(this.checkout) // update cart count
  }
  orderProduct() {
    if (this.checkout.length > 0) {
      for (let i = 0; i < this.checkout.length; i++) {
        delete this.checkout[i].productName
        this.services.orderProduct(this.checkout[i]).subscribe(res => {
          if (res === true) {
            this.router.navigate(['/productlist'])
            alert('Order Sucessfully')
            this.checkout.length=0  // clear cart
            this.services.cartDetails(this.checkout) // update cart count
           
          }
          else {
            (error: any) => {
              alert(error)
            }
          }
        })

      }

    }
    else {
      alert("Cart Empty")
    }
  }
}
