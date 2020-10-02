import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  backendUrl = 'http://localhost:8080/accounts/';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  addUser(user):Observable<any>{
    return this.http.post(this.backendUrl+'signup', user);
  }

  getUser(user):Observable<any>{
    return this.http.post(this.backendUrl+'login', user);
  }
}
