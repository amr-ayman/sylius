import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cartItems$ = this.cartItems.asObservable();

  private getOrCreateCart() {
    const existingCart = window.localStorage.getItem('userCart');
    const userCart = {
      id: 101,
      products: []
    };
    if (!existingCart) {
      window.localStorage.setItem('userCart', JSON.stringify(userCart));
    }
    return JSON.parse(existingCart);
  }

  checkCart() {
    const existingCart = this.getOrCreateCart();
    this.cartItems.next(existingCart.products.length);
  }

  getCartItems() {
    const existingCart = this.getOrCreateCart();
    const filteredCart = [];
    existingCart.products.map(x => {
      if (x.quantity !== 1) {
        x.quantity = 1;
        filteredCart.push(x);
      } else {
        filteredCart.map(y => {
          if (x.id === y.id) {
            y.quantity += 1;
          }
        });
      }
    });
    return filteredCart;
  }

  addToCart(product) {
    const existingCart = this.getOrCreateCart();
    existingCart.products.push(product);
    window.localStorage.setItem('userCart', JSON.stringify(existingCart));
    this.checkCart();
  }

  removeFromCart(product) {
    const existingCart = this.getOrCreateCart();
    const item = existingCart.products.find((item) => {
      return item.id === product.id;
    });
    existingCart.products.splice(existingCart.products.indexOf(item), 1);
    window.localStorage.setItem('userCart', JSON.stringify(existingCart));
    this.checkCart();
  }

  resetCart() {
    window.localStorage.removeItem('userCart');
    this.getOrCreateCart();
    this.checkCart();
  }
}
