import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthTrackerService implements CanActivate {

  constructor() { }
  canActivate(): boolean {
    if (localStorage.getItem('usertoken')) {
      return true;
    }
    alert("Inicia sesión para actualizar tus datos")
    return false;
  }
}
