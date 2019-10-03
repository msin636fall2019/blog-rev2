import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Post } from './models/post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  id: number = 1;
  posts: Post[] = [];
  constructor(private toastr: ToastrService, private http: HttpClient) { }

  fetchPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((posts: any) => {
      this.posts = posts;
     }
    );
  }

  addPost(post) {

    if (post.id) {
      post.date = Date.now()
      const index = this.posts.indexOf(post);
      this.posts[index] = post;
      this.toastr.warning('Post Updated', 'SUCCESS');

    }
    else {
      post.id = this.id;
      this.id++;
      post.date = Date.now()
      this.posts.unshift(post);
      this.toastr.success('Post Added', 'SUCCESS');

    }
  }


  getPost(id: number) {
    return this.posts.find(post => post.id === id);
  }

  deletePost(post) {
    this.id--;
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.toastr.error('Post Deleted', 'SUCCESS');
  }
}
