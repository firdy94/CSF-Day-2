import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import { UsercartComponent } from './usercart/usercart.component';

@NgModule({
  declarations: [
    AppComponent,
    CartitemComponent,
    UsercartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
