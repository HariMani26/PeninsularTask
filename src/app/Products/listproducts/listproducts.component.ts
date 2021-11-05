import { Component, OnInit } from '@angular/core';
import { Productsservices } from 'src/app/Services/productsservices.service';
@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {

  orderProduct: any[] = []
  productdetails: any
  constructor(
    private services: Productsservices

  ) { }

  ngOnInit(): void {
    this.getProduct()
  }


  getProduct() {
    this.services.getProductList().subscribe(res => {
      const filiterNull = res
      this.productdetails = filiterNull.filter((p: any) => (p.productName != null && p.productName != ""));// filiternull value
      console.log(this.productdetails)
    })
  }
  // add cart
  addCart(productname: any, productid: any) {
    const cartcusmer = {
      "customerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "productId": productid,
      "productName": productname,
      "quantity": 0
    }
    this.services.Product.push(cartcusmer)
    this.services.cartDetails(this.services.Product) // product details move ordercomponent
  }
}
