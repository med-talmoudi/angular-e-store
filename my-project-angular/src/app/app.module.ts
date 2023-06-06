import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";  
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CartComponent } from './layout/cart/cart.component';
import { ItemComponent } from './layout/item/item.component';   
import { HomeComponent } from './layout/home/home.component';
import { ItemCardComponent } from './component/item-card/item-card.component';
import { ErrorComponent } from './layout/error/error.component';
import { CategoryNavBarComponent } from './component/category-nav-bar/category-nav-bar.component';
import { PhoneTabletComponent } from './layout/phone-tablet/phone-tablet.component';
import { LaptopsDesktopsComponent } from './layout/laptops-desktops/laptops-desktops.component';
import { AccessoriesComponent } from './layout/accessories/accessories.component';
import { ContactComponent } from './layout/contact/contact.component';
import { AboutUSComponent } from './layout/about-us/about-us.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';





const appRouter : Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'item', component: ItemComponent},
  {path: 'cart', component: CartComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about-us', component: AboutUSComponent},
  {path: 'home/phone-tablet', component: PhoneTabletComponent},
  {path: 'home/laptops-desktops', component: LaptopsDesktopsComponent},
  {path: 'home/accessories', component: AccessoriesComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  
  {path: '**', component: ErrorComponent},
];





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ItemComponent,
    FooterComponent,
    NavbarComponent,
    ItemCardComponent,
    ErrorComponent,
    CategoryNavBarComponent,
    PhoneTabletComponent,
    LaptopsDesktopsComponent,
    AccessoriesComponent,
    ContactComponent,
    AboutUSComponent,
    ProductDetailsComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRouter),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],


 
  
})
export class AppModule { }
