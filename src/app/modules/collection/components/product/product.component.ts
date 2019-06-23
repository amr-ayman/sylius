import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiRequestService} from "../../../../core/services/http/base-api-request.service";
import {Product} from "../../../../core/interfaces/collection.interface";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  private product: Product;
  constructor(private activeRoute: ActivatedRoute, private api: ApiRequestService) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.getProduct(id);
  }

  getProduct(id) {
    this.api.getAllProducts().subscribe(data => {
      this.product = data.find( product => product.id === +id);
    });
  }

  addToCart(product) {
    console.log(product);
  }
}
