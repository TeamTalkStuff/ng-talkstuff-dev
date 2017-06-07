import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FeedService} from "../services/feeds/feeds.service";

declare var jQuery: any;

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {
  @Input() comment: any;
  @Output() commentReplied = new EventEmitter();

  constructor(private feedService: FeedService) { }

  ngOnInit() {
  }

  replyComment(replyBtn: any){
    jQuery(replyBtn).parent().parent().next().toggleClass('uk-hidden');
  }

  submitComment(keyPressed: any, comment){
    if(keyPressed.code === 'Enter'){
      const reply = keyPressed.target.value;

      this.feedService.makeCommentOnComment(comment.id, reply).subscribe(
        (response) => {
          this.comment.comments.push(response);
          this.commentReplied.emit(response);
        }
      );
      keyPressed.target.value = '';
    }
  }
}
