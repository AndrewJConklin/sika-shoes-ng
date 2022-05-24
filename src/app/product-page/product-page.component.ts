import {Component} from "@angular/core";
import {Product} from "../product.model"
import { ActivatedRoute } from "@angular/router";
import { ApiIntegrationService } from "../api-integration.service";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.css"]
})
export class ProductPageComponent {
  product?: Product;
  error = false;
  id!: string | null

  constructor(private route: ActivatedRoute, private api: ApiIntegrationService) {
    this.route.params.subscribe()
    this.id = this.route.snapshot.paramMap.get("id")
  }
  ngOnInit() {
    this.api.getProducts().subscribe(response =>  {
      this.product = response.products.find(product => product.id === +this.id!)
    })
  }
}
