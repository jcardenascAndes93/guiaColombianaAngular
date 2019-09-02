import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) { }

  // The createUser method using a POST request
  createUser(userData): Observable<any> {
    return this.http.post('https://guia-colombiana.herokuapp.com/accounts/users/', userData);
  }

  // Login the user method using a POST request
  loginUser(userData): Observable<any> {
    return this.http.post('https://guia-colombiana.herokuapp.com/accounts/auth/', userData);
  }

  updateUser(userData): Observable<any> {
    return this.http.put('https://guia-colombiana.herokuapp.com/accounts/users/1/', userData);
  }
}

