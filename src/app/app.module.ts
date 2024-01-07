import { NgModule,LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarsService } from './services/cars.service';
import { RoundToNearestPipe } from '../pipes/round-to-nearest.pipe';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TabsComponent } from './product/tabs/tabs.component';
import { CardComponent } from './card/card.component';
import { FormComponent } from './contact/form/form.component';
import { InputComponent } from './contact/input/input.component';


registerLocaleData(localeFr); //register fr-FR locale, default is en-US

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'products/purchase',component:ProductsComponent},  
  {path:'products/rent',component:ProductsComponent},
  {path:'product/:id',component:ProductComponent},
  {path:'contact',component:FormComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RoundToNearestPipe,
    ProductsComponent,
    ProductComponent,
    NotFoundComponent,
    TabsComponent,
    CardComponent,
    FormComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),  
    FormsModule,
    BrowserAnimationsModule,    
  	ToastrModule.forRoot({ timeOut: 3000 })
  ],
  providers: [
    CarsService,
    { provide: LOCALE_ID, useValue: 'fr-FR'}  //reset default locale to fr-FR
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
