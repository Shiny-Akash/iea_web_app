import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseProfileUrl = 'http://localhost:8080/api/profile/'

  constructor(
    private http: HttpClient
  ) { }

  getProfile(username): Observable<any> {
    let token = localStorage.getItem('token')
    return this.http.get(this.baseProfileUrl + username, {headers: {Authorization: `Bearer ${token}`}})
  }

  updateProfile(username, profile) {
    let token = localStorage.getItem('token')
    return this.http.post(this.baseProfileUrl + username, {profile} , {headers: {Authorization: `Bearer ${token}`}})
  }

  sendVerificationEmail(body) {
    let token = localStorage.getItem('token')
    return this.http.post("http://localhost:8080/api/mail/send/"+body.username, { emailid: body.emailid }, {headers: {Authorization: `Bearer ${token}`}})
  }
}
