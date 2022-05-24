import {Component, OnInit} from "@angular/core";
import {Product} from "../product.model"
import { ApiIntegrationService } from "../api-integration.service";

@Component({
  selector: "app-products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.css"]
})
export class ProductsPageComponent implements OnInit {
  products: Product[] = []
  error = false
  id!: string | null

  constructor(private api: ApiIntegrationService) {
  }
  ngOnInit() {
    this.api.getProducts().subscribe(response =>  {
      this.products = response.products
    })
  }
}
