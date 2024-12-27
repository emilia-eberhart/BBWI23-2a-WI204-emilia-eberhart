import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CVComponent } from './components/cv/cv.component';
import { CreateUpdateComponent } from './components/cv/create-update/create-update.component';
import { DeleteComponent } from './components/cv/delete/delete.component';
import { LoginAppComponent } from './login-app/login-app.component';
const routes: Routes = [
{ path: 'about-me', component: AboutMeComponent },
{ path: 'cv', component: CVComponent },
{ path: 'cv/new', component: CreateUpdateComponent },
{ path: 'cv/:id/edit', component: CreateUpdateComponent },
{ path: 'cv/:id/delete', component: DeleteComponent },
{ path: 'login-app', component: LoginAppComponent},
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }