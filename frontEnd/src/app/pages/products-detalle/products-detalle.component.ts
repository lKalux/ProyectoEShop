import { Component, OnInit } from '@angular/core';
import { ProductsDetalleService } from 'src/app/services/products-detalle.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Product } from '../products/interfaces/product.interface';

@Component({
  selector: 'app-products-detalle',
  templateUrl: './products-detalle.component.html',
  styleUrls: ['./products-detalle.component.css']
})
export class ProductsDetalleComponent implements OnInit {

  prod$=this.productoDetalleSvc.detailsAction$;

  
  constructor(private shoppingCartSvc:ShoppingCartService,
    private productoDetalleSvc:ProductsDetalleService) { }

  ngOnInit(): void {
  }

  onClick(producto:Product):void{
    this.shoppingCartSvc.updateCart(producto);
  }
}
