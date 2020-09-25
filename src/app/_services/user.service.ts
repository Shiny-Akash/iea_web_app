import { Injectable } from '@angular/core';
import { USERS } from '../_models/dummyUserData';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

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
}
