import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) { }

  // The createUser method using a POST request
  createUser(userData): Observable<any> {
    return this.http.post('https://guia-colombiana.herokuapp.com/accounts/users/', userData);
    //return this.http.post('http://127.0.0.1:8000/accounts/users/', userData);
  }

  // Login the user method using a POST request
  loginUser(userData): Observable<any> {
    return this.http.post('https://guia-colombiana.herokuapp.com/accounts/auth/', userData);
    //return this.http.post('http://127.0.0.1:8000/accounts/auth/', userData);
  }

  updateUser(userData): Observable<any> {

    //return this.http.patch('http://127.0.0.1:8000/accounts/users/' + localStorage.getItem('userid') +'/', userData);
    return this.http.put('https://guia-colombiana.herokuapp.com/accounts/users/' + localStorage.getItem('userid') + '/', userData);

  }
}

