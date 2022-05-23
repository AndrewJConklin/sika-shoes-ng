import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from './product.model';

export type ProductsResponse = {
  products: Product[];
}

@Injectable({
  providedIn: 'root'
})

export class ApiIntegrationService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<ProductsResponse>("../assets/products.json")
  }
}
