import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {FeedsComponent} from './feeds/feeds.component';
import {UserHomeComponent} from './user-home/user-home.component';
import {MakePostComponent} from './make-post/make-post.component';
import {FormsModule} from '@angular/forms';
import {PostService} from './services/posts/post.service';
import {PhotoUploadComponent} from './photo-upload/photo-upload.component';
import {FeedService} from './services/feeds/feeds.service';
import {MediaAttachmentsComponent} from './media-attachments/media-attachments.component';
import {SharedModule} from '../shared/shared.module';
import {UserSummaryComponent} from './user-summary/user-summary.component';
import {CommentItemComponent} from './comment-item/comment-item.component';
import {VideoPlayerComponent} from './video-player/video-player.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
    FeedsComponent,
    UserHomeComponent,
    MakePostComponent,
    PhotoUploadComponent,
    MediaAttachmentsComponent,
    UserSummaryComponent,
    CommentItemComponent,
    VideoPlayerComponent,
  ],
  providers: [PostService, FeedService]
})
export class UserModule { }
