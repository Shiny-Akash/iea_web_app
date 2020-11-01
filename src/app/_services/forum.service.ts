import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts():Observable<any> {
    return this.http.get(environment.backendUrl + "forum/")
  }

  createPost(username, forumform):Observable<any> {
    let token = localStorage.getItem('token')
    return this.http.post(environment.backendUrl + "forum/" + username, forumform, {headers: {Authorization: `Bearer ${token}`}})
  }

}
