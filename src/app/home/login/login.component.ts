import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    name: '',
    password: ''
  };

  constructor() {}

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('login form submitted');
  }
}
