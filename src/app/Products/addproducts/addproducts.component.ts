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
    private form: FormBuilder,
    private service: Productsservices
  ) { }

  ngOnInit(): void {

    this.initFormGroup()
  }
  initFormGroup() {
    this.orderForm = this.form.group({
      productvalues: this.form.array([this.initQuesForm()]),
    });
  }
  initQuesForm(): FormGroup {
    return this.form.group({
      productName: new FormControl('', Validators.required),
      availableQuantity: new FormControl(null,Validators.required),

    });
  }
  getformgroup() {
    return (this.orderForm.get('productvalues') as FormArray).controls;
  }
  addControl(i: any) {
    if (this.orderForm.get('productvalues')?.valid) {
      const productnames = this.orderForm.get('productvalues') as FormArray;
      productnames.push(this.initQuesForm()); // add formcontrol
    } else {
      this.orderForm.get('productvalues')?.markAllAsTouched();
    }
  }
  //Remove 
  removeControl(i: any) {
    const removeQuetion = this.orderForm.get('productvalues') as FormArray;
    removeQuetion.removeAt(i); // remove formcontrol
  }


  //Add Product
  saveProduct() {
    if (this.orderForm.get('productvalues')?.valid) {
      if (this.orderForm.value.productvalues.length > 0) {
        for (let i = 0; i < this.orderForm.value.productvalues.length; i++) {
        this.orderForm.value.productvalues[i].availableQuantity=parseInt(this.orderForm.value.productvalues[i].availableQuantity) // convert string int
        this.service.addProduct(this.orderForm.value.productvalues[i]).subscribe(ren => {
            if(ren===true){
              alert("Product Added")
              this.orderForm.get('productvalues')?.reset()
              this.initFormGroup()
            }
            else{
              (error:any)=>{
              alert(error);
            
            }
            }
            console.log(ren)
          })
         
        }
      }
    }
    else {
      this.orderForm.get('productvalues')?.markAllAsTouched();
    }
  }

}
