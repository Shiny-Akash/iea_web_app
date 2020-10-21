import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginform: FormGroup;
  rememberme: boolean = true;

  constructor(
    private router: Router,
    private userservice: UserService
  ) {}

  ngOnInit(): void {
    this.loginform = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(1)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  onSubmit(){
    this.userservice.loginUser(this.loginform.value).subscribe({
      error: err => alert(err.error.message),
      next: data => {
        alert('login successful !');
        if (!this.rememberme) {
          sessionStorage.setItem('token', data.token);
          sessionStorage.setItem('username', this.loginform.controls.username.value)
        } else {
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', this.loginform.controls.username.value)
        }
        this.router.navigate([`/${data.username}`]);
      }
    })
  }

}
