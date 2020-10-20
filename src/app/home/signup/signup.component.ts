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
      username: new FormControl('',[Validators.required, Validators.minLength(1)]),
      password: new FormControl('',[Validators.required, Validators.minLength(3)]),
      confpassword: new FormControl('',[Validators.required, Validators.minLength(3)])
    }, {validators: this.confirmPassword})
  }

  onSubmit() {
    this.userservice.addUser(this.signupform.value).subscribe({
      error: error => alert(error.error.message),
      next: () => {
        alert('Signup successful!! Please login ');
        this.router.navigate(['/home/login']);
      }
    })
  }

  confirmPassword: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    let firstPassword = control.get('password');
    let secondPassword = control.get('confpassword');  
    return firstPassword && secondPassword && firstPassword.value != secondPassword.value ? {passwordMisMatch: true} : null;
  };

}
