import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { HeaderComponent } from './components/header/header.component';
import {ProductService} from './product.service';
import {AuthService} from './auth.service';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddComplexProductComponent } from './components/add-complex-product/add-complex-product.component';
import { AddProductReactiveComponent } from './components/add-product-reactive/add-product-reactive.component';
import { ProductNamePipe } from './product-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductDisplayComponent,
    HeaderComponent,
    AddProductComponent,
    AddComplexProductComponent,
    AddProductReactiveComponent,
    ProductNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    ProductService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
