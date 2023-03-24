import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomersHostComponent } from './components/customers-host/customers-host.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// AngularMaterials
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    CustomersHostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatTableModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
