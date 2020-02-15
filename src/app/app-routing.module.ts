import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {SearchResultPageComponent} from './pages/search-result-page/search-result-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'search', component: SearchResultPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
