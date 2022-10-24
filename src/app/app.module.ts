import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { WjOlapModule } from '@grapecity/wijmo.angular2.olap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WjOlapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
