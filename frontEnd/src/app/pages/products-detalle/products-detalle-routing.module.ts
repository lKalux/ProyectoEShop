import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDetalleComponent } from './products-detalle.component';

const routes: Routes = [{ path: '', component: ProductsDetalleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsDetalleRoutingModule { }
