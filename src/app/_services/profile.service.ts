import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseProfileUrl = 'http://localhost:8080/api/profile/'
  private token = ""

  constructor(
    private http: HttpClient
  ) { 
    this.token = localStorage.getItem('token')
  }

  getProfile(username): Observable<any> {
    return this.http.get(this.baseProfileUrl + username, {headers: {Authorization: `Bearer ${this.token}`}})
  }

  updateProfile(username, profile) {
    return this.http.post(this.baseProfileUrl + username, {profile} , {headers: {Authorization: `Bearer ${this.token}`}})
  }
}
