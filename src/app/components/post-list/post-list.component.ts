import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor( public postService: PostsService) { }

  ngOnInit() {
  }

  deletePost(post){
    this.postService.deletePost(post)
  }

}
