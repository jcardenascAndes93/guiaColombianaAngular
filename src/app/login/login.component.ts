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

  loginUser() {
    this.userService.loginUser(this.login).subscribe(
      response => {
        alert('Bienvenido ' + this.login.username);
        localStorage.setItem('usertoken', JSON.parse(JSON.stringify(response.token)));
        localStorage.setItem('userid', JSON.parse(JSON.stringify(response.id)));
        localStorage.setItem('username', JSON.parse(JSON.stringify(response.username)));
        localStorage.setItem('userfname', JSON.parse(JSON.stringify(response.fname)));
        localStorage.setItem('userlname', JSON.parse(JSON.stringify(response.lname)));
        localStorage.setItem('useremail', JSON.parse(JSON.stringify(response.email)));
        localStorage.setItem('userphone', JSON.parse(JSON.stringify(response.phone)));

      },
      error => {
        alert('Verifica tus datos y vuelve a intentarlo');
        console.log('ERROR: ', error);
      }
    )
  }

}
