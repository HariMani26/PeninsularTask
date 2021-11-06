import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { AddproductsComponent } from './addproducts.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Productsservices} from '../../Services/productsservices.service'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
//import { HttpClientModule,HttpClient } from '@angular/common/http';
describe('AddproductsComponent', () => {
  let component: AddproductsComponent;
  let fixture: ComponentFixture<AddproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule,HttpClientTestingModule],
      declarations: [ AddproductsComponent ],
      providers:[Productsservices],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
