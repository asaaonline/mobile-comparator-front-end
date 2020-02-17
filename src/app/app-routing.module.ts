import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {SearchResultPageComponent} from './pages/search-result-page/search-result-page.component';
import {SingleItemViewComponent} from './pages/single-item-view/single-item-view.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {LoginComponent} from './pages/login/login.component';
import {FavoritsComponent} from './pages/favorits/favorits.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'search', component: SearchResultPageComponent},
  {path: 'item', component: SingleItemViewComponent},
  {path: 'sign_up', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'favorite', component: FavoritsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
