import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {SearchResultPageComponent} from './pages/search-result-page/search-result-page.component';
import {SingleItemViewComponent} from './pages/single-item-view/single-item-view.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'search', component: SearchResultPageComponent},
  {path: 'item', component: SingleItemViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
