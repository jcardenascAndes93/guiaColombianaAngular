import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login', // CSS element selector
  templateUrl: './login.component.html', // Location of the template
  styleUrls: ['./login.component.css'] // Location of the component's private CSS
})
export class LoginComponent implements OnInit {
  username = 'Username';

  constructor() { }

  ngOnInit() {
  }

}
