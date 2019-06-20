import {Component, OnInit} from '@angular/core';
import {TranslationService} from '../../../services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit{

  private cartItems: number;

  constructor(private translate: TranslationService) {
  }

  ngOnInit() {
    this.cartItems = 5;
  }

  changeLang() {
    this.translate.changeLang();
  }
}
