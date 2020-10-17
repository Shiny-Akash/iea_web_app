import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  backendUrl = 'http://localhost:8080/accounts/';

  constructor( private http: HttpClient ) { }

  addUser(user):Observable<any>{
    return this.http.post(this.backendUrl + 'signup', user);
  }

  loginUser(user):Observable<any>{
    return this.http.post(this.backendUrl + 'login', user);
  }

  getUser(userid):Observable<any>{
    let token = localStorage.getItem('token')
    return this.http.get(this.backendUrl + `${userid}`, {headers: { Authorization: `Bearer ${token}`}})
  }
}
