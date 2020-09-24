import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupform: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.signupform = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(3)]),
      confpassword: new FormControl('',[Validators.required, Validators.minLength(3)])
    }, {validators: this.confirmPassword})
  }

  onSubmit() {
    alert('signup form submitted');
  }

  confirmPassword: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const firstPassword = control.get('password');
    const secondPassword = control.get('confpassword');
    //alert(firstPassword.value + ' ' + secondPassword.value)
  
    return firstPassword && secondPassword && firstPassword.value != secondPassword.value ? {passwordMisMatch: true} : null;
  };

}
