import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ContactRoutingModule} from './contact-routing.module';
import {ContactComponent} from './components';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    RouterModule,
    ContactRoutingModule,
    SharedModule
  ],
  declarations: [
    ContactComponent
  ],
  providers: []
})
export class ContactModule {
}
