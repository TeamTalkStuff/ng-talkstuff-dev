import { Injectable } from '@angular/core';
import {Post} from '../../make-post/post';
import {Http, Response} from '@angular/http';
import {AppConfig} from '../../../config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {AuthService} from "../../../security/auth.service";

@Injectable()
export class FeedService {

  constructor(private http: Http) { }

  fetchFeeds(user: any) {
    return this.http.get('/users/' + user.id + '/feeds').map(
      (response: any) => {
        return response.json();
      }
    );

  }

  togglePostLike(post){
    const user = JSON.parse(localStorage.getItem('authUser'));

    return this.http.post(`/posts/${user.id}/post/${post.id}/likes`, {}).map(
      (response: any) => {
        return response.json();
      }
    );
  }

  makeCommentOnPost(postId, comment){
    const user = JSON.parse(localStorage.getItem('authUser'));

    return this.http.post(`/posts/${user.id}/post/${postId}/comments`, {comment: comment}).map(
      (response: any) => {
        return response.json();
      }
    );
  }

  makeCommentOnComment(commentId, reply: any) {
    const user = JSON.parse(localStorage.getItem('authUser'));

    return this.http.post(`/posts/${user.id}/comments/${commentId}`, {comment: reply}).map(
      (response: any) => {
        return response.json();
      }
    );
  }
}
