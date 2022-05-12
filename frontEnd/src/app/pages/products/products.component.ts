import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './services/products.service';
import { ProductComponent } from './product/product.component';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ProductsDetalleService } from 'src/app/services/products-detalle.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  listCat:any=[
    {
      "id": 1,
      "name": "Books"
    },
    {
      "id": 2,
      "name": "Electronics"
    },
    {
      "id": 3,
      "name": "Computers"
    }
  ];
  categoria:number=1 ;
  products!:Product[]; 
  constructor(
    private productsSvc:ProductsService,
    private shoppingCartSvc:ShoppingCartService,
    private productDetalleSvc:ProductsDetalleService,
    private location:Location) { }

  ngOnInit(): void {
    this.productsSvc.getProducts().pipe(
      tap((products:Product[])=> this.products = products)
    ).subscribe();
  }


  addToCart(product:Product):void{
    console.log(product);
    this.shoppingCartSvc.updateCart(product);
  }

  addDetails(product:Product):void{
    console.log(product);
    this.productDetalleSvc.updateDetails(product);
    this.location.go("/details");
  }
}
