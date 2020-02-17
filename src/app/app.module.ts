import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {SearchPanelComponent} from './common/search-panel/search-panel.component';
import { SearchResultPageComponent } from './pages/search-result-page/search-result-page.component';
import { ItemCardComponent } from './pages/search-result-page/item-card/item-card.component';
import { SingleItemViewComponent } from './pages/single-item-view/single-item-view.component';
import {MobilePriceCardComponent} from './pages/single-item-view/mobile-price-card/mobile-price-card.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { FavoritsComponent } from './pages/favorits/favorits.component';
import {CookieService} from 'ngx-cookie-service';
import { FavoriteCardComponent } from './pages/favorits/favorite-card/favorite-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPanelComponent,
    SearchResultPageComponent,
    ItemCardComponent,
    SingleItemViewComponent,
    MobilePriceCardComponent,
    SignUpComponent,
    LoginComponent,
    FavoritsComponent,
    FavoriteCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
