import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileform: FormGroup;

  constructor(
    private route: ActivatedRoute
  ) { 
    this.profileform = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      phoneno: new FormControl(''),
      emailid: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

}
