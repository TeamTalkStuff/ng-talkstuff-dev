import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {
  @Input() user;

  constructor() { }

  ngOnInit() {
  }

}
