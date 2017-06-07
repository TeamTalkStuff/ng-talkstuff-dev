import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UtilityService} from '../../shared/services/utility.service';
import {Router} from '@angular/router';
import {RegistrationService} from '../registration-service.service';
import {Broadcaster} from "../../shared/services/broadcaster";

@Component({
  selector: 'app-reg-step-one-page',
  templateUrl: './reg-step-one-page.component.html',
  styleUrls: ['./reg-step-one-page.component.css']
})
export class RegStepOnePageComponent implements OnInit {

  @Output() stageCompleted = new EventEmitter();
  @Output() errorOccurred = new EventEmitter();
  saving = false;

  constructor(private utilityService: UtilityService, private regService: RegistrationService, private broadcaster: Broadcaster) { }

  ngOnInit() {
  }

  register(form: NgForm){
    this.saving = true;

    this.regService.registerStageOne(
      form.value.firstName,
      form.value.lastName,
      form.value.username,
      form.value.email,
      form.value.password)
      .subscribe(
        (response: any) => {
          const data = JSON.parse(response._body);
          if(data.id){
            // data was successfully saved
            // todo:: move to reg-stage-two
            this.stageCompleted.emit(data);
          } else {
            // validation error was returned
            this.broadcaster.broadcast('error-occurred', data);
          }

          this.saving = false;
        },
        error => {
          // console.log('caught error');
          console.log(error);
          this.saving = false;

        }
    );
  }

}
