import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HeaderComponent, LayoutComponent} from './components';
import {RouterModule} from '@angular/router';
import { SidebarComponent } from './components/main-layout/sidebar/sidebar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/main-layout/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgbModule
  ],
  exports: [
    HeaderComponent,
    LayoutComponent
  ],
  providers: [
    TranslateService
  ]
})
export class CoreModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/translate-files/', '.json');
}
