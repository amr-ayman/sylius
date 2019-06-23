import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../../core/services/cart.service";
import {Product} from "../../../../core/interfaces/collection.interface";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  private userCart: Product[] = [];

  constructor(private cart: CartService) {
  }

  ngOnInit() {
    this.userCart = this.cart.getCartItems();
  }

  clearCart() {
    this.cart.resetCart();
    this.userCart = [];
  }
}
