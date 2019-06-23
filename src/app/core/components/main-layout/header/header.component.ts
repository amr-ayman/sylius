import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslationService} from '../../../services/translation.service';
import {CartService} from "../../../services/cart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit, OnDestroy {

  private cartItems: number;
  private cartItemsSubscription: Subscription;

  constructor(private translate: TranslationService, private cart: CartService) {
  }

  ngOnInit() {
    this.cart.checkCart();
    this.cartItemsSubscription = this.cart.cartItems$.subscribe(value => {
      this.cartItems = value;
    });
  }

  ngOnDestroy() {
    this.cartItemsSubscription.unsubscribe();
  }

  changeLang() {
    this.translate.changeLang();
  }
}
