import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  accountDetails = {}

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userservice: UserService,
  ) { }

  ngOnInit(): void {
    let userid = ''
    this.route.params.subscribe( params => userid = params.userid )
    console.log(userid)
    this.userservice.getUser(userid).subscribe({
      error: () => this.router.navigate(['/home/login']),
      next: data => this.accountDetails = data
    })
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/home/about']);
  }
}
