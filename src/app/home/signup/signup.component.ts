import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupform: FormGroup;

  constructor(
    private router: Router,
    private userservice: UserService
  ) { }

  ngOnInit(): void {
    this.signupform = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.minLength(5)]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)]),
      confpassword: new FormControl('',[Validators.required, Validators.minLength(8)])
    }, {validators: this.confirmPassword})
  }

  onSubmit() {
    this.userservice.addUser(this.signupform.value).subscribe({
      next: data => {
        localStorage.setItem('username', data.username);
        localStorage.setItem('password', data.password);
        alert('signup successful!!');
        this.router.navigate(['../user']);
      },
      error: error => alert(error.error.message)
    })
  }

  confirmPassword: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const firstPassword = control.get('password');
    const secondPassword = control.get('confpassword');  
    return firstPassword && secondPassword && firstPassword.value != secondPassword.value ? {passwordMisMatch: true} : null;
  };

}
