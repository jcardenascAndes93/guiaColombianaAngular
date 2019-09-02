import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {GuiasHomeComponent} from "./guias-home/guias-home.component";
import {GuiaComponent} from "./guia/guia.component";


const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'guias', component: GuiasHomeComponent},
  {path: 'guiasdetalle/:id', component: GuiaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
