import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import {UserDemoModule} from "./user-demo/user-demo.module";
import { AnalythicDemoComponent } from './analythic-demo/analythic-demo.component';
import {AnalyticsDemoModule} from "./analythic-demo/analytics-demo.module";


@NgModule({
  declarations: [
    AppComponent,
    UserDemoComponent,
    AnalythicDemoComponent
  ],
  imports: [
    BrowserModule,
    UserDemoModule,
    AnalyticsDemoModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
