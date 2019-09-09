import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  username;
  ngOnInit() {
    if (localStorage.getItem("username")) {
      this.username = JSON.parse(localStorage.getItem("username"));
    }
    else {
      this.username = "Login";
    }
  }

  logout() {
    localStorage.clear();
    alert("Sesión cerrada");

  }

}
