import { Component, OnInit } from '@angular/core';
import { Productsservices } from 'src/app/Services/productsservices.service';
import{product} from './productClass'
@Component({
  selector: 'app-listproducts',
  templateUrl:'./listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {
img=""
orderProduct:any[]=[]
productdetails:any
cartDetails=new product()
  constructor(
private services:Productsservices

  ) { }

  ngOnInit(): void {
    this.getProduct()
  }


 getProduct(){
   this.services.getProductList().subscribe(res=>{
     const filiterNull=res
   this.productdetails = filiterNull.filter((p:any) => (p.productName != null&&p.productName != "")); 
   console.log(this.productdetails)
  })
 } 
 addCart(productname:any,productid:any){

  //const addCart=this.productdetails.find((f:any)=>f.productId===productid)
  const cartcusmer={
    "customerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "productId": productid,
    "productName":productname,
    "quantity": 0
  }
  this.orderProduct.push(cartcusmer)
  console.log(this.orderProduct)
  this.services.cartDetails(this.orderProduct)
 }
}
