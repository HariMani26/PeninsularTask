import { TestBed } from '@angular/core/testing';
import { Productsservices } from './productsservices.service';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('ProductsservicesService', () => {
  let service: Productsservices;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
      
    });
    
    service = TestBed.inject(Productsservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
