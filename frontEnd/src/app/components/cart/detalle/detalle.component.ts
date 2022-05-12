import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Product } from "src/app/pages/products/interfaces/product.interface";
import { ShoppingCartService } from "src/app/services/shopping-cart.service";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector:'app-detalle',
    templateUrl:'./detalle.component.html',
    styleUrls:['./detalle.component.scss']
})

export class DetalleComponent implements OnInit{

    quantity$ = this.shoppingCartSvc.quantityAction$;
    total$ = this.shoppingCartSvc.totalAction$;
    cart$ = this.shoppingCartSvc.cartAction$;

    producto!:any;

    constructor(@Inject(MAT_DIALOG_DATA) public data:any,
     private shoppingCartSvc:ShoppingCartService){}
    
    ngOnInit(): void {
    }

}