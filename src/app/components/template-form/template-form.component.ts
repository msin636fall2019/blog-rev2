import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';
import { Post } from 'src/app/models/post';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  postId: number;
  mode;
  FormTitle;
  btnLable;
  post: Post = { title: '', body: '', date: null }

  constructor(private postService: PostsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('id')) {
        this.postId = parseInt(params.get('id'), 10);
        this.post = this.postService.getPost(this.postId);
        this.mode = 'edit';
        this.FormTitle = 'EDIT POST';
        this.btnLable = 'Update Post'
      }
      else {
        this.mode = 'add';
        this.FormTitle = 'ADD POST';
        this.btnLable = 'Add Post'
      }


    });
  }

  addPost(form) {
    this.postService.addPost(this.post);
    this.post = { title: '', body: '', date: null }
    form.reset();
    this.router.navigate(['/posts']);
  }

}
