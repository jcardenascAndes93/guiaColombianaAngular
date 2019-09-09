import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { AuthTrackerService } from '../auth-tracker.service';

@Component({
  selector: 'app-modificar-datos',
  templateUrl: './modificar-datos.component.html',
  styleUrls: ['./modificar-datos.component.css'],
  providers: [UsersService, AuthTrackerService],
})
export class ModificarDatosComponent implements OnInit {

  userUpdating;
  constructor(private userService: UsersService) { }

  ngOnInit() {

    // Initialize userUpdating object
    this.userUpdating = {
      first_name: (localStorage.getItem('userfname')),
      last_name: (localStorage.getItem('userlname')),
      email: (localStorage.getItem('useremail')),
      phone: (localStorage.getItem('userphone')),

    };
  }

  // Update the user using the createUser service
  updateUser() {
    this.userService.updateUser(this.userUpdating).subscribe(
      response => {
        alert('Actualización correcta');
        localStorage.setItem('userfname', this.userUpdating.first_name);
        localStorage.setItem('userlname', this.userUpdating.last_name);
        localStorage.setItem('useremail', this.userUpdating.email);
        localStorage.setItem('userphone', this.userUpdating.phone);
      },
      error => console.log('ERROR: ', error)
    );
  }

}
