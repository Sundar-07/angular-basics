import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireDatabaseModule } from "@angular/fire/database";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddmasterComponent } from './addmaster/addmaster.component';
import { ViewmasterComponent } from './viewmaster/viewmaster.component';
import { environment } from 'src/environments/environment';
import { MasterService } from './shared/master.service';

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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule
 
  ],
  providers: [MasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
