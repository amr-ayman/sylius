import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CollectionRoutingModule} from './collection-routing.module';
import {ProductsComponent} from './components';
import {SharedModule} from '../../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import {CollectionComponent} from "./components/collection.component";

@NgModule({
  imports: [
    RouterModule,
    CollectionRoutingModule,
    SharedModule
  ],
  declarations: [
    CollectionComponent,
    ProductsComponent,
    ProductComponent
  ],
  providers: []
})
export class CollectionModule {
}
