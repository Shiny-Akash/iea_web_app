import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { USERS } from '../_models/dummyUserData';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  addUser(user):void{
    let found = USERS.find(x => x.username == user.username && x.password == user.password);
    if (!found){
      USERS.push(user);
      alert('user added');
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
      this.router.navigate(['../user']);
    }
  }
}
