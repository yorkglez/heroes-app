import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import {HeroeComponent} from './components/heroe/heroe.component';
import {SearchComponent} from './components/search/search.component';
import {AddheroeComponent} from './components/addheroe/addheroe.component';
const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'search/:ter', component: SearchComponent },
  { path: 'create', component: AddheroeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' } //default redirect
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
