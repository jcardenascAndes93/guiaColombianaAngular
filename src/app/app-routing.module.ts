import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {GuiasHomeComponent} from "./guias-home/guias-home.component";
import {GuiaComponent} from "./guia/guia.component";
import {TouresComponent} from "./toures/toures.component";
import {ModificarDatosComponent} from './updateUser/modificar-datos.component';



const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: GuiasHomeComponent},
  {path: 'guiasdetalle/:id', component: GuiaComponent},
  {path: 'tours/:id', component: TouresComponent},
  {path: 'update', component: ModificarDatosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
