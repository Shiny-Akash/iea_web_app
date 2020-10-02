import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginform: FormGroup;

  constructor(private userservice: UserService) {}

  ngOnInit(): void {
    this.loginform = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  onSubmit(){
    this.userservice.getUser(this.loginform.value).subscribe({
      next: data => {alert(data.message);},
      error: err => {alert(err.error.message);}
    })
  }
}
