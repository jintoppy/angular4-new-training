import { Component } from '@angular/core';
import {Response} from '@angular/http';
import {ProductService} from './product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  inputVal ="My INput value";
  products= [];
  constructor(private service: ProductService){

  }

  ngOnInit(){
    //this.products = this.service.getProducts();
    const productsObservable = this.service.getProductsFromApi();

    productsObservable
      .subscribe((products) => {
        this.products = products;
      });
  }
  onBtnClick(){
    alert(this.inputVal);
  }

  onCartClicked(){
    alert('cart clicked');
  }
}
