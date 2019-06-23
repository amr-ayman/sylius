import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiRequestService} from "../../../../core/services/http/base-api-request.service";
import {Product} from "../../../../core/interfaces/collection.interface";
import {CartService} from "../../../../core/services/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  private product: Product;
  constructor(
    private activeRoute: ActivatedRoute,
    private api: ApiRequestService,
    private cart: CartService
  ) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.getProduct(id);
  }

  getProduct(id) {
    this.api.getAllProducts().subscribe(data => {
      this.product = data.find( product => product.id === +id);
      this.checkInCart();
    });
  }

  // Check Product Quantity In Cart
  checkInCart() {
    const cartItems = this.cart.getCartItems();
    cartItems.map(x => {
      if (this.product.id === x.id) {
        this.product.quantity = x.quantity;
      } else {
        this.product.quantity = 0;
      }
    });
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
