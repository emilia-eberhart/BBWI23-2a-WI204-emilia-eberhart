import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CVComponent } from './components/cv/cv.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateUpdateComponent } from './components/cv/create-update/create-update.component';
import { DeleteComponent } from './components/cv/delete/delete.component';
import { LoginAppComponent } from './login-app/login-app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    CVComponent,
    CreateUpdateComponent,
    DeleteComponent,
    LoginAppComponent,
    RegistrationComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
