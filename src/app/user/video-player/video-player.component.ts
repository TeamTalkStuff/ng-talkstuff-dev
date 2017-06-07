import {Component, DoCheck, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit, DoCheck {

  @Input() source: any = '';
  extractedUrl: any = '';

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    this.pickYoutubeIdFromUrl(this.source);
  }

  pickYoutubeIdFromUrl(url: string){
    const startIndex = url.search('v=');

    const  youTubeId = url.substr(startIndex + 2, 11);

    const newUrl = 'https://www.youtube.com/embed/' + youTubeId;

    if(this.extractedUrl !== newUrl){
      this.extractedUrl = newUrl;
    }
  }
}
