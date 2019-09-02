import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { GuiaComponent } from './guia/guia.component';
import { TouresComponent } from './toures/toures.component';
import { GuiasHomeComponent } from './guias-home/guias-home.component';
import {ModificarDatosComponent} from './updateUser/modificar-datos.component';

@NgModule({
  declarations: [
    ModificarDatosComponent,
    AppComponent,
    LoginComponent,
    SignupComponent,
    BarraSuperiorComponent,
    GuiaComponent,
    TouresComponent,
    GuiasHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
