import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import{Productsservices} from './Services/productsservices.service'
@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(
    private injector: Injector
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const apiService: Productsservices= this.injector.get(Productsservices);
    
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');

    const Url: string = apiService.apiUrl(request.url);
    request = request.clone({
        url: Url,
        headers
    });
   
    return next.handle(request)
    .pipe(
      
      tap((event=>{

       if(event instanceof HttpResponse){

       if(event.status===200){

        if (event.body['error'] && event.body['errorCode'] && event.body['errorCode'] === 401) {
          alert(event.body['error']);
        }
       }

    }
    return event;
  
  }),

  error=> {

    if(error instanceof HttpErrorResponse && error.status === 401){
  
    }
    }));
  }
  
}
