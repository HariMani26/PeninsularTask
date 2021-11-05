import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError as observableThrowError, Observable, from } from 'rxjs';
import { environment } from "src/environments/environment";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Productsservices {
  private API_URL= environment.ApiUrl;
  cartcount:number
  private edit = new BehaviorSubject([]);
  cart = this.edit.asObservable();
  constructor(
private http:HttpClient
  ) { 
    
  }

  apiUrl(apiMethods: string): string {
    return this.API_URL+apiMethods;
  }
  cartDetails(data: any) {
    debugger
    this.edit.next(data)
  }
  getProductList(): Observable<any> {
    const apiUrl = 'Product'
    return this.http.get<any>(apiUrl);
  }

  orderProduct(product:any):Observable<any>{
    const apiUrl='OrderProducts'
    return this.http.post<any>(apiUrl,product)
  }
  addProduct(productdetails:any):Observable<any>{
    const apiUrl='Product'
    return this.http.post<any>(apiUrl,productdetails)
  }
}
