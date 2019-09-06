import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

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
    // Initialize user object
    this.user = {
      first_name: JSON.parse(localStorage.getItem('userfname')),
      last_name: JSON.parse(localStorage.getItem('userlname')),
      email: JSON.parse(localStorage.getItem('useremail')),
      phone: JSON.parse(localStorage.getItem('userphone')),
    };
  }

  // Update the user using the createUser service
  updateUser() {
    this.userService.updateUser(this.user).subscribe(
      response => {
        alert('User ' + this.user.username + ' upgrade success')
      },
      error => console.log('ERROR: ', error)
    );
  }

}
