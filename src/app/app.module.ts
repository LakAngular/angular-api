import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListOrdersComponent } from './components/list-users/list-orders.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { AddOrdersComponent } from './components/add-orders/add-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOrdersComponent,
    ViewOrdersComponent,
    AddOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
