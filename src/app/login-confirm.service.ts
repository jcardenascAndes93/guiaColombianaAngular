import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginConfirmService implements CanDeactivate<LoginComponent> {

  constructor() { }
  canDeactivate(target: LoginComponent) {
    if(localStorage.getItem('usertoken')){
      return window.confirm('Para iniciar sesión con otra cuenta se cerrará su sesión actual. ¿Desea continuar?');
    }
    return true;
  }
}
