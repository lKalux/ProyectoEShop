import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";

const routes:Routes = [
    { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
    { path: 'details', loadChildren: () => import('./pages/products-detalle/products-detalle.module').then(m => m.ProductsDetalleModule) },
    //{ path: 'details', loadChildren: () => import('./components/cart/detalle/detalle.module').then(m => m.DetalleModule) },
    {path: '**', redirectTo:'',pathMatch:'full'}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{ }