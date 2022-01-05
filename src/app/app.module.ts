import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Routes, RouterModule  } from '@angular/router';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {MyGuardGuard} from './my-guard.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const appRoutes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'nav', component: NavBarComponent },
{ path: 'signUp', component: SignUpComponent },
{ path: 'not-found', component: FourOhFourComponent },
{ path: '**', redirectTo: 'not-found' }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    FourOhFourComponent,
    SignUpComponent  
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    InfiniteScrollModule,
    FontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
