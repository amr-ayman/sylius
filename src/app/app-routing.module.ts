import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './core/components';

const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'collection', loadChildren: './modules/collection/collection.module#CollectionModule'},
      {path: 'about', loadChildren: './modules/about/about.module#AboutModule'},
      {path: 'contact', loadChildren: './modules/contact/contact.module#ContactModule'},
      {path: '', redirectTo: '/collection', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
