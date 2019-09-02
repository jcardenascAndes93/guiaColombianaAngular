import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-modificar-datos',
  templateUrl: './modificar-datos.component.html',
  styleUrls: ['./modificar-datos.component.css'],
  providers: [UsersService]
})
export class ModificarDatosComponent implements OnInit {

  user;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    // Initialize register object
    this.user = {
      username: 'paola',
      password: 'paola',
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
    };
  }

  // Register the user using the createUser service
  updateUser() {
    this.userService.updateUser(this.user).subscribe(
      response => {
        alert('User ' + this.user.username + ' upgrade success')
      },
      error => console.log('ERROR: ', error)
    );
  }

}
