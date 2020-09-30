import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { USERS } from '../_models/dummyUserData';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  addUser(user):void{
    let found = USERS.find(x => x.username == user.username);
    if (!found){
      USERS.push(user);
      this.getUser(user);
      return 
    }
    else{
      alert('user already exists');
      return
    }
  }

  getUser(user):void{
    let found = USERS.find(x => x.username == user.username && x.password == user.password);
    if (!found){
      alert('user not found');
      return
    }
    else{
      //save the user credentials for this session
      localStorage.setItem('username', user.username);
      localStorage.setItem('password', user.password)
      this.router.navigate(['../user']);
    }
  }
}
