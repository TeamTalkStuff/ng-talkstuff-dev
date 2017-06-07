import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-reg-step-three-page',
  templateUrl: './reg-step-three-page.component.html',
  styleUrls: ['./reg-step-three-page.component.css']
})
export class RegStepThreePageComponent implements OnInit {
  @Input() user: any;
  @Output() stageCompleted = new EventEmitter();

  saving = false;
  users = [];
  friends = 0;

  constructor(private http: Http) { }

  ngOnInit() {
    this.setupCommunity(this.user.id);
  }

  nextStage(){
    this.stageCompleted.emit(this.user);
  }

  setupCommunity(userId: number){
    this.saving = true;
    return this.http.get(`/users/register/${userId}/setup-community`).subscribe(
      response => {
        const data = response.json();

        this.saving = false;
        this.friends = data.friends.length;
        this.user = data.user;
      },
      error => {
        console.log('error occurred');
      }
    );
  }

  skipStage(){
    this.stageCompleted.emit(this.user);
  }
}
