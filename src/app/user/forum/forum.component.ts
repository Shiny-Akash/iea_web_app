import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from 'src/app/_services/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  Posts = []
  showForumForm = false;
  public forumform: FormGroup;

  constructor(
    private forumService: ForumService,
    private route: ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
    this.getPosts()
    this.forumform = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])
    })
  }

  getPosts() {
    this.forumService.getPosts().subscribe({
      next: (data) => {
        this.Posts = data
        //console.log(JSON.stringify(data))
      },
      error: (err) => console.log(err)
    })
  }

  createPost() {
    let username = ''
    this.route.parent.params.subscribe({
      next: (params) => {
        username = params.username;
      }
    })
    this.forumService.createPost(username, this.forumform.value).subscribe({
      next: (data) => {
        this.forumform.reset();
        this.showForumForm = false;
        alert(data.message);
        this.getPosts();
      }
    })
  }

}
