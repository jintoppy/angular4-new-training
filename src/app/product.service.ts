import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {AuthService} from './auth.service';
import 'rxjs/Rx';

@Injectable()
export class ProductService {
  private products = [
    {
      name: 'IPhone',
      price: 200
    },
    {
      name: 'Redmi',
      price: 300
    }
  ];
  constructor(private http: Http, private auth: AuthService) { }

  getProducts(){
    if(this.auth.isLoggedIn()){
      return this.products;  
    }    
  }

  getProductsFromApi(){
    return this.http
                  .get('/assets/products.json')
                  .map(res => res.json());
  }

}
