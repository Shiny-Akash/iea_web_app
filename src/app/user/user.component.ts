import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userservice: UserService,
  ) { }

  ngOnInit(): void {
    
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/home/about']);
  }
}
