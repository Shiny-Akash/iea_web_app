import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = {
    username: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
    this.user.username = localStorage.getItem('username');
    this.user.password = localStorage.getItem('password');
  }

  logout(): void {
    alert("loggin out");
  }
}
