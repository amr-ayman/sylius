import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './components';


export const aboutRoutes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(aboutRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AboutRoutingModule {
}
