import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AboutRoutingModule} from './about-routing.module';
import {AboutComponent} from './components';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    RouterModule,
    AboutRoutingModule,
    SharedModule
  ],
  declarations: [
    AboutComponent
  ],
  providers: []
})
export class AboutModule {
}
