import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  accountUrl = 'http://localhost:8080/accounts/';
  userUrl = 'http://localhost:8080/';

  constructor( private http: HttpClient ) { }

  addUser(user):Observable<any>{
    return this.http.post(this.accountUrl + 'signup', user);
  }

  loginUser(user):Observable<any>{
    return this.http.post(this.accountUrl + 'login', user);
  }

  getUser(userid):Observable<any>{
    let token = localStorage.getItem('token')
    return this.http.get(this.userUrl + `${userid}`, {headers: { Authorization: `Bearer ${token}`}})
  }
}
