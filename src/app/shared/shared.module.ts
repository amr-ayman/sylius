import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FilterProducts} from "../core/pipes/filter.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule
  ],
  exports: [
    // Modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    FilterProducts
  ],
  declarations: [
    FilterProducts
  ],
  providers: []
})

export class SharedModule {

}
