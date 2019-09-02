import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-modificar-datos',
  templateUrl: './modificar-datos.component.html',
  styleUrls: ['./modificar-datos.component.css'],
  providers: [UsersService]
})
export class ModificarDatosComponent implements OnInit {

  userUpdating;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    // Initialize register object
    this.userUpdating = {
      first_name: '',
      last_name: '',
      phone: '',
    };
  }

  // Register the user using the createUser service
  updateUser() {
    this.userService.updateUser(this.userUpdating).subscribe(
      response => {
        alert('User ' + this.userUpdating.first_name+ ' upgrade success')
      },
      error => console.log('ERROR: ', error)
    );
  }

}
