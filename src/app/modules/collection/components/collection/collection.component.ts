import {Component, OnInit} from '@angular/core';
import {ApiRequestService} from "../../../../core/services/http/base-api-request.service";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html'
})
export class CollectionComponent implements OnInit {

  constructor(private api: ApiRequestService) {
  }

  ngOnInit() {
    this.api.get('products', {}, []).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }
}
