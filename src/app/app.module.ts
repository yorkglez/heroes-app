import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

//Routes
import {APP_ROUTING} from './app.routes';
import {RouterModule} from '@angular/router';
//services
import {HeroesService} from './services/heroes.service';
//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AddheroeComponent } from './components/addheroe/addheroe.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearchComponent,
    HeroeCardComponent,
    AddheroeComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      }
    ])
  ],
  providers: [
    HeroesService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
