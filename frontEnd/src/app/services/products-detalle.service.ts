import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "../pages/products/interfaces/product.interface";

@Injectable({
    providedIn:'root'
})

export class ProductsDetalleService{
    product:Product[]=[];

    private detailsSubject= new BehaviorSubject<Product[]>([]);

    get detailsAction$():Observable<Product[]>{
        return this.detailsSubject.asObservable(); 
    }

    updateDetails(producto:Product):void{
        this.addDetails(producto);
    }

    private addDetails(producto:Product):void{
        this.product=[];
        this.product.push(producto)
        this.detailsSubject.next(this.product);
        console.log(this.detailsSubject);
    }
}