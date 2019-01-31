import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DemoFormSkuWithBuildeComponent } from './demo-form-sku-with-builde/demo-form-sku-with-builde.component';
import { FormNgModelComponent } from './form-ng-model/form-ng-model.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuildeComponent,
    FormNgModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
//
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
