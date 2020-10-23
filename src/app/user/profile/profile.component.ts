import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/_services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileform: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) { 
    this.profileform = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      phoneno: new FormControl(''),
      emailid: new FormControl(''),
    })
  }

  ngOnInit(): void {
    let username = ''
    this.route.parent.params.subscribe({
      next: (params) => {
        username = params.username;
      }
    })
    this.profileService.getProfile(username).subscribe({
      error: (err) => console.log(err),
      next: (data) => console.log(data.profile)
    })
  }

}
