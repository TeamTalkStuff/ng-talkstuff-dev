import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-avatar-component',
  templateUrl: './user-avatar-component.component.html',
  styleUrls: ['./user-avatar-component.component.css']
})
export class UserAvatarComponent implements OnInit {

  @Input() imgSrc = null;
  @Input() width = '30px';
  @Input() height = '30px';

  constructor() { }

  ngOnInit() {
  }

}
