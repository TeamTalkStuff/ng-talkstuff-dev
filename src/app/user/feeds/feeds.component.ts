import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FeedService} from '../services/feeds/feeds.service';
import {AuthService} from "../../security/auth.service";

declare var jQuery: any;

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit, AfterViewInit {

  public fetchingFeeds = false;
  feeds = [];
  user;

  constructor(private feedService: FeedService,  private authService: AuthService) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.fetchingFeeds = true;
    this.authService.getAuthUser().subscribe(
      (user) => {
        this.user = user;
        this.feedService.fetchFeeds(user).subscribe(
          (data) => {
            this.feeds = data.feeds;
            this.fetchingFeeds = false;
          }
        );
      }
    );

  }

  showAddedPost(post){
    this.feeds.unshift(post);
  }

  toggleLike(post){
    const feedPos = this.feeds.findIndex((feed) => {
      return feed.id === post.id;
    });
    const clickedPost = this.feeds[feedPos];
    clickedPost.liked = !clickedPost.liked;

    this.feedService.togglePostLike(post).subscribe(
      (pst) => {
        this.feeds[feedPos] = pst;
      }
    );
  }

  toggleCommentArea(commentBtn: any){
    // fetches and toggles the comments area
    jQuery(commentBtn).parent().parent().parent().parent().next().slideToggle();
  }

  submitComment(keyPressed: any, post){
    if(keyPressed.code === 'Enter'){
      const feedPos = this.feeds.findIndex((feed) => {
        return feed.id === post.id;
      });
      const commentedPost = this.feeds[feedPos];
      const comment = keyPressed.target.value;

      this.feedService.makeCommentOnPost(post.id, comment).subscribe(
        (response) => {
          commentedPost.comments.push(response);
        }
      );
      keyPressed.target.value = '';
    }
  }
}
