import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { Productsservices } from 'src/app/Services/productsservices.service';
@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  orderForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: Productsservices
  ) { }

  ngOnInit(): void {

    this.initFormGroup()
  }
  initFormGroup() {
    this.orderForm = this.fb.group({
      productvalues: this.fb.array([this.initQuesForm()]),
    });
  }
  initQuesForm(): FormGroup {
    return this.fb.group({
      producatName: new FormControl('', Validators.required),
      productQunity: new FormControl(null, Validators.required),

    });
  }
  getformgroup() {
    return (this.orderForm.get('productvalues') as FormArray).controls;
  }
  addControl(i: any) {
    if (this.orderForm.get('productvalues')?.valid) {
      const productname = this.orderForm.get('productvalues') as FormArray;
      productname.push(this.initQuesForm());
    } else {
      this.orderForm.get('productvalues')?.markAllAsTouched();
    }
  }
  removeControl(i: any) {
    const removeQuetion = this.orderForm.get('productvalues') as FormArray;
    removeQuetion.removeAt(i);
  }


  //Add Product
  saveProduct() {

    if (this.orderForm.get('productvalues')?.valid) {
      if (this.orderForm.value.productvalues.length > 0) {
        for (let i = 0; i < this.orderForm.value.productvalues.length; i++) {
          this.service.addProduct(this.orderForm.value.productvalues[i]).subscribe(ren => {
            console.log(ren)
          })
          console.log(this.orderForm.value.productvalues)
        }
      }
    }
    else {
      this.orderForm.get('productvalues')?.markAllAsTouched();
    }
  }

}
