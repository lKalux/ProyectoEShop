import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsDetalleRoutingModule } from './products-detalle-routing.module';
import { ProductsDetalleComponent } from './products-detalle.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    ProductsDetalleComponent
  ],
  imports: [
    CommonModule,
    ProductsDetalleRoutingModule,
    MaterialModule
  ]
})
export class ProductsDetalleModule { }
