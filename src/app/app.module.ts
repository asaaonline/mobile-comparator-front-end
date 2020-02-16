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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPanelComponent,
    SearchResultPageComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
