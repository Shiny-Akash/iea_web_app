import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  nouserfound = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user.username = localStorage.getItem('username');
    this.user.password = localStorage.getItem('password');
    if (!this.user.username) {
      this.router.navigate(['/home/login']);
    }
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/home/about']);
  }
}
