import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  @Input()
  myProduct;
  
  @Output()
  onAddToCartBtnClick : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    
  }

  onClick(){
    this.onAddToCartBtnClick.emit('sdf');
  }

}
