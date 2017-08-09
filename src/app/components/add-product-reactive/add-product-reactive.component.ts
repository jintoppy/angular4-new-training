import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-add-product-reactive',
  templateUrl: './add-product-reactive.component.html',
  styleUrls: ['./add-product-reactive.component.css']
})
export class AddProductReactiveComponent implements OnInit {
  @Input()
  myTitle: string;
  @Input()
  myList: Array<Object>;
  someName = 'THIS IS A trial one. It is different cases';
  someDate;
  myForm: FormGroup;
  private validationsArray: Array<ValidatorFn> = [Validators.required, Validators.minLength(2), this.customUserNameValidationFn.bind(this)]
  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      profile: new FormGroup({
        username: new FormControl(null, this.validationsArray),
        password: new FormControl(null, Validators.required)
      })
    });
  }

  onFormSubmit(){
    console.log(this.myForm.value);
    this.someDate = 1502294267650;
  }
  
  customUserNameValidationFn(c: FormControl){
    const value = c.value;
    if(value && value.startsWith('a')){
      return {
        startsWithA: true
      };
    }

    return null;

  }

}
