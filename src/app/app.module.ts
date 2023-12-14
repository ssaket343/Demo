import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { CustComponent } from './cust/cust.component';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import HttpClientModule
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component'; // Import MatSnackBarModule
import { HashLocationStrategy, LocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    CustComponent,
    SigninComponent,
    AsideComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy },],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
