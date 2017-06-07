import {Component, OnChanges, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {UtilityService} from '../../shared/services/utility.service';
import {RegistrationService} from '../registration-service.service';
import {Router} from '@angular/router';
import {Broadcaster} from '../../shared/services/broadcaster';

declare var _;

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  user;
  errors = [];
  currentStage = 1;

  constructor(private utilityService: UtilityService, private router: Router, private broadcaster: Broadcaster) {}

  ngOnInit() {
    this.broadcaster.on('error-occurred').subscribe(errorObj => {
      this.errors = [];
      _.forIn(errorObj, (val, key) => {
        this.errors.push(val[0]);
      });
      console.log(this.errors);
    });
  }

  removeError(error){
    const errorPos = this.errors.findIndex((err) => {
      return err === error;
    });

    this.errors.splice(errorPos, 1);
  }

  gotoStageTwo(data){

    this.currentStage = 2;

    this.user = data;
  }

  gotoStageThree(data){
    this.currentStage = 3;
    this.user = data;

  }

  gotoStageFour(data){
    this.currentStage = 4;
    this.user = data;
  }

  finish(data){
    console.log(data);
    this.utilityService.notify(`Welcome to TalkStuff, ${data.firstName}. Please login.`);
    this.router.navigate(['/security/login']);
  }
}
