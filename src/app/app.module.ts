import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from "./app.component";

import {AboutPageComponent} from "./about-page/about-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {ProductsPageComponent} from "./products-page/products-page.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {ProductListingComponent} from "./product-listing/product-listing.component";

const routes: Routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},{
  path: "home",
  component: HomePageComponent,
},{
  path: "about",
  component: AboutPageComponent,
}, {
  path: "products",
  component: ProductsPageComponent,
}, {
  path: "product/:id",
  component: ProductPageComponent,
}];

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductsPageComponent,
    NavBarComponent,
    ProductListingComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
