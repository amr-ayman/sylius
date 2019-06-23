import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CartRoutingModule} from './cart-routing.module';
import {CartComponent} from './components';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    RouterModule,
    CartRoutingModule,
    SharedModule
  ],
  declarations: [
    CartComponent
  ],
  providers: []
})
export class CartModule {
}
