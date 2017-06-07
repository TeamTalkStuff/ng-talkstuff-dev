import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from './post';
import {PostService} from '../services/posts/post.service';
import {AuthService} from '../../security/auth.service';

declare var jQuery: any;

@Component({
  selector: 'app-make-post',
  templateUrl: './make-post.component.html',
  styleUrls: ['./make-post.component.css']
})
export class MakePostComponent implements OnInit {
  @Output() postSaved = new EventEmitter<any>();

  post: Post;
  images: any[];
  user;
  saving = false;
  videoUrl = '';

  constructor(private postService: PostService, private authService: AuthService) {
    this.post = new Post();
    this.images = [];
  }

  ngOnInit() {
    this.authService.getAuthUser()
      .subscribe(
        usr => this.user = usr
      );
  }


  onSubmitNewPost(){

    if(this.post.content.length || this.images.length || this.videoUrl.length){
      this.saving = true;
      this.post.user_id = this.user.id;



      this.images.forEach(img => {
        this.post.mediaAttachments.push(img.id);
      });


      this.postService.savePost(this.post, this.videoUrl)
        .subscribe(
          post => {
            this.saving = false;
            this.post = new Post();
            this.images = [];
            this.videoUrl = '';
            this.postSaved.emit(post);
          }
        )
      ;
    } else {
      console.log('no content in post');
    }
  }

  showImage(media: any){
    this.images.push(media);
  }

  deleteMedia(image: any){
    const pos = this.images.findIndex((img) => {
      return img.id === image.id;
    });

    this.images.splice(pos, 1);
  }


  showVideoArea(videoBtn){

    const videoAreaHtml = jQuery(videoBtn).parent().parent().parent().parent().prev();

    videoAreaHtml.slideToggle();
  }
}
