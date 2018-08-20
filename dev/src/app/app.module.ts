import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { RightmenuComponent } from './home/rightmenu/rightmenu.component';
import { AuthService } from './auth/auth.service';
import { FormsModule } from '../../node_modules/@angular/forms';




const appRoutes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'home', component: HomeComponent},
  {path: 'page', component: HomeComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    RightmenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
