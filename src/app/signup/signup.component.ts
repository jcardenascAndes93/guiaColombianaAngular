import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UsersService]
})
export class SignupComponent implements OnInit {
  register;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    // Initialize register object
    this.register = {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
    };
  }

  // Register the user using the createUser service
  registerUser() {
    this.userService.createUser(this.register).subscribe(
      response => {
        alert('User ' + this.register.username + ' register success')
      },
      error => console.log('ERROR: ', error)
    );
  }

}
