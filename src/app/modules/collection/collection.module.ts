import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CollectionRoutingModule} from './collection-routing.module';
import {CollectionComponent} from './components';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    RouterModule,
    CollectionRoutingModule,
    SharedModule
  ],
  declarations: [
    CollectionComponent
  ],
  providers: []
})
export class CollectionModule {
}
