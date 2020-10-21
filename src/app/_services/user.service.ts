import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  accountUrl = 'http://localhost:8080/api/accounts/';
  userUrl = 'http://localhost:8080/api/profile/';

  constructor( private http: HttpClient ) { }

  addUser(user):Observable<any>{
    return this.http.post(this.accountUrl + 'signup', user);
  }

  loginUser(user):Observable<any>{
    return this.http.post(this.accountUrl + 'login', user);
  }

  getUser(userid):Observable<any>{
    var token;
    token = sessionStorage.getItem('token')
    if (!token) 
      token = localStorage.getItem('token')
    return this.http.get(this.userUrl + `${userid}`, {headers: { Authorization: `Bearer ${token}`}})
  }
}
