import { Component, OnInit } from '@angular/core';
import { FormBuilder, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform = this.fb.group({
    username: [''],
    password: ['']
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('login form submitted');
  }
}
