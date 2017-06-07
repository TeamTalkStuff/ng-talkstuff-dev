import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-media-attachments',
  templateUrl: './media-attachments.component.html',
  styleUrls: ['./media-attachments.component.css']
})
export class MediaAttachmentsComponent implements OnInit {
  @Input() attachments = [];

  constructor() { }

  ngOnInit() {
  }

}
