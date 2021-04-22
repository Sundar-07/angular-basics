import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddmasterComponent } from './addmaster/addmaster.component';
import { ViewmasterComponent } from './viewmaster/viewmaster.component';

@NgModule({
  declarations: [
    AppComponent,
    AddmasterComponent,
    ViewmasterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
