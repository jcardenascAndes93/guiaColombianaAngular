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
        localStorage.setItem('usertoken', JSON.stringify(response.token));
        localStorage.setItem('userid', JSON.stringify(response.id));
        localStorage.setItem('userfname', JSON.stringify(response.fname));
        localStorage.setItem('userlname', JSON.stringify(response.lname));
        localStorage.setItem('useremail', JSON.stringify(response.email));
        localStorage.setItem('userphone', JSON.stringify(response.phone));
        alert('Bienvenido ' + this.login.username);
      },
      error => {
        alert('Verifica tus datos y vuelve a intentarlo');
        console.log('ERROR: ', error);
      }
    )
  }

}
