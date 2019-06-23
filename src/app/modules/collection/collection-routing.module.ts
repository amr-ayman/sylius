import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './components';
import {ProductComponent} from "./components/product/product.component";
import {CollectionComponent} from "./components/collection.component";


export const collectionRoutes: Routes = [
  {
    path: '',
    component: CollectionComponent,
    children: [
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: ':id',
        component: ProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(collectionRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CollectionRoutingModule {
}
