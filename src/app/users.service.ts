import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  // base_url = 'http://127.0.0.1:8000';
  base_url = 'https://guia-colombiana.herokuapp.com';
  constructor(private http: HttpClient) { }

  // The createUser method using a POST request
  createUser(userData): Observable<any> {
    return this.http.post(this.base_url + '/accounts/users/', userData);
  }

  // Login the user method using a POST request
  loginUser(userData): Observable<any> {
    return this.http.post(this.base_url + '/accounts/auth/', userData);
  }

  updateUser(userData): Observable<any> {
    return this.http.patch(this.base_url + '/accounts/users/' + localStorage.getItem('userid') + '/', userData);

  }
}

