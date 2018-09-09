import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import{FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductListComponent } from './Views/product-list/product-list.component';
import { ProductDetailsComponent } from './Views/product-details/product-details.component';
import { StarComponent } from './Shared/star/star.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    StarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }