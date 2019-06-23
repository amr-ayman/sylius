import {Component, OnInit} from '@angular/core';
import {ApiRequestService} from "../../../../core/services/http/base-api-request.service";
import {Product} from "../../../../core/interfaces/collection.interface";
import {Router} from "@angular/router";
import {CartService} from "../../../../core/services/cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  private collection: Product[] = [];
  private productsFilter = '';

  constructor(
    private api: ApiRequestService,
    private router: Router,
    private cart: CartService,
  ) {
  }

  ngOnInit() {
    /*    // Unable to access due to CORS Issue
        this.api.get('products', {}, []).subscribe(
          (data) => console.log(data),
          (error) => console.log(error)
        );*/
    this.getCollection();
  }

  // Return Static Collection Data
  getCollection() {
    this.api.getAllProducts().subscribe(data => {
      this.collection = data;
      this.checkInCart();
    });
  }

  // Check Products Quantity In Cart
  checkInCart() {
    const cartItems = this.cart.getCartItems();
    this.collection.map(x => {
      x.quantity = 0;
      cartItems.map(y => {
        if (y.id === x.id) {
          x.quantity += 1;
        }
      });
    });
  }

  // Filter Products By Selected Category
  filterProducts(filter) {
    this.productsFilter = filter;
  }

  viewProduct(id) {
    this.router.navigate([`collection/${id}`]);
  }

  addToCart(product) {
    this.cart.addToCart(product);
    product.quantity += 1;
  }

  removeFromCart(product) {
    this.cart.removeFromCart(product);
    product.quantity -= 1;
  }
}
