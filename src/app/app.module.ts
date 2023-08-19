import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout/main-layout.component';
import { ShufflePipe } from './shared/pipes/shuffle.pipe';
import { OrdersModule } from './modules/orders/orders.module';
import { MenuModule } from './modules/menu/menu.module';
import { FooterComponent } from './components/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ReplaceAndCapitalizeStringPipe } from './shared/pipes/replace-and-capitalize-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    MainLayoutComponent,
    ShufflePipe,
    FooterComponent,
    ReplaceAndCapitalizeStringPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrdersModule,
    MenuModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
