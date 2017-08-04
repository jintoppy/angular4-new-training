import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setValue(myform: NgForm){
    myform.form.setValue({
      title: 'custom',
      price: 20
    });
  }

  resetForm(myform: NgForm){
    myform.reset();
  }

  patchValue(myform: NgForm){
    myform.form.patchValue({
      title: 'patched'      
    });
  }

  onFormSubmit(form){
    if(form.valid){
      console.log(form.value);
    }
    
  }

}
