import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) { }

  // The createUser method using a POST request
  createUser(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/accounts/users/', userData);
  }
}

