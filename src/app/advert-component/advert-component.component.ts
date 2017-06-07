import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advert-component',
  templateUrl: './advert-component.component.html',
  styleUrls: ['./advert-component.component.css']
})
export class AdvertComponent implements OnInit {

  adUrl = 'http://lorempixel.com/1200/800/technics';
  ads = [];

  constructor() { }

  ngOnInit() {
    this.ads.push('assets/images/ads/app_now_open.jpg');
    this.ads.push('assets/images/ads/magazine4-page-001.jpg');
    this.ads.push('assets/images/ads/magazine4-page-002.jpg');
    this.ads.push('assets/images/ads/magazine4-page-036.jpg');

    let counter = 1;
    setInterval(() => {
      if(counter > this.ads.length) counter = 1;

      this.changeAd(this.ads[counter - 1]);
      counter++;
    }, 15000);
  }

  changeAd(url){
    this.adUrl = url;
  }
}
