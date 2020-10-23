import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
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
      error: (err) => {
        alert('session expired');
        this.router.navigate(['/home'])
      },
      next: (data) => {
        this.profileform.patchValue(data.profile)
      }
    })
  }

  onSubmit() {
    let username = ''
    this.route.parent.params.subscribe({
      next: (params) => {
        username = params.username;
      }
    })
    this.profileService.updateProfile(username, this.profileform.value).subscribe({
      error: (err) => {
        alert(JSON.stringify(err));
      },
      next: (data) => {
        alert('Profile update successfull !')
      }
    })
  }

  verifyEmail() {
    let emailid = this.profileform.controls.emailid.value;
    console.log(emailid)
  }

}
