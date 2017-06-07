import { Injectable } from '@angular/core';
import {Post} from '../../make-post/post';
import {Http, Response} from '@angular/http';
import {AppConfig} from '../../../config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  savePost(post: Post, videoUrl? : string){
    return this.http.post('/posts' + '/' + post.user_id, {post: post, videoUrl: videoUrl})
      .map(
        (response: Response) => {
          return response.json();
        }
      )
    ;
  }
}
