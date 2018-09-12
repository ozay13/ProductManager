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
import { WelcomeComponent } from './Views/welcome/welcome.component';
import { NotfoundpageComponent } from './Shared/notfoundpage/notfoundpage.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    StarComponent,
    WelcomeComponent,
    NotfoundpageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products',component:ProductListComponent},
      {path:'product-detail',component:ProductDetailsComponent},
      {path:'welcome',component:WelcomeComponent},
      {path:' ',redirectTo:'welcome' , pathMatch:'full' },
      {path:'**',component:NotfoundpageComponent,pathMatch:'full'}

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }