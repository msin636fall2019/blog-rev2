import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../posts.service';
import { Post } from '../../models/post';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post;
  postId: number;
  constructor(
    public postService: PostsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.postId = parseInt(params.get('id'), 10);
      this.post = this.postService.getPost(this.postId);
    });
  }


  deletePost(post) {
    this.postService.deletePost(post);
    this.router.navigate(['/']);

  }

}
