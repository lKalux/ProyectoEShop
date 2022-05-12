import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsDetalleService } from 'src/app/services/products-detalle.service';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input () product!: Product;
  @Input () categoria: number=1;
  @Output () addToCartClick = new EventEmitter<Product>();
  @Output () addDetailsClick = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  onclick():void{
    this.addToCartClick.emit(this.product);
  }

  onClickDetails(){
    this.addDetailsClick.emit(this.product);
  }

}
