import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-login', // CSS element selector
  templateUrl: './login.component.html', // Location of the template
  styleUrls: ['./login.component.css'], // Location of the component's private CSS
  providers: [UsersService]
})
export class LoginComponent implements OnInit {
  login;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.login = {
      username: '',
      password: '',
    }
  }

  loginUser(){
    this.userService.loginUser(this.login).subscribe(
      response => {
        alert('Bienvenido ' + this.login.username);
      },
      error => {
        alert('Verifica tus datos y vuelve a intentarlo');
        console.log('ERROR: ', error);
      }
    )
  }

}
