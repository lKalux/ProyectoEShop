import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiURL='http://localhost:3000/api/';
  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get<Product[]>(this.apiURL+'productos');
  }
}