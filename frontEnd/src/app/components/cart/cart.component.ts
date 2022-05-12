import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ShoppingCartService } from "src/app/services/shopping-cart.service";
import { DetalleComponent } from "./detalle/detalle.component";

@Component({
    selector:'app-cart',
    templateUrl:'./cart.component.html'
})
export class CartComponent{
    quantity$ = this.shoppingCartSvc.quantityAction$;
    total$ = this.shoppingCartSvc.totalAction$;
    cart$ = this.shoppingCartSvc.cartAction$;
  
    constructor(private shoppingCartSvc:ShoppingCartService,
        public dialog:MatDialog){
  
    }

    openDialog(){
        const dialogRef=this.dialog.open(DetalleComponent,{})
        dialogRef.afterClosed().subscribe(res=>{ 
        })
    }
}