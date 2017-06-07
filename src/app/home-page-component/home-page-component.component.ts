import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthService} from '../security/auth.service';

declare var jQuery: any

@Component({
  selector: 'app-home-page-component',
  templateUrl: './home-page-component.component.html',
  styleUrls: ['./home-page-component.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {

  }
}
