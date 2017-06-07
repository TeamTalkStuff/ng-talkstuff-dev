import {
  AfterViewChecked,
  AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
  ViewChild
} from '@angular/core';
import {RegistrationService} from '../registration-service.service';
import {NgForm} from '@angular/forms';
import {Http} from '@angular/http';
import {Broadcaster} from '../../shared/services/broadcaster';
import {monthRange} from "../../config";

declare var jQuery: any;
declare var _: any;

@Component({
  selector: 'app-reg-step-two-page',
  templateUrl: './reg-step-two-page.component.html',
  styleUrls: ['./reg-step-two-page.component.css']
})
export class RegStepTwoPageComponent implements AfterViewInit, OnInit, DoCheck {

  @Output() stageCompleted = new EventEmitter();
  @Input() user: any;

  @ViewChild('dateOfBirthControl') dateOfBirthControl: ElementRef;
  @ViewChild('f2') f2: NgForm;

  saving = false;
  loadingCountries;
  loadingStates = false;
  states;
  countries;
  dob = '';
  pickedDay = '';
  pickedMonth = '';
  pickedYear = '';

  dayRange = [];
  monthRange = [];
  yearRange = [];

  constructor(private broadcaster: Broadcaster, private regService: RegistrationService, private http: Http) {

  }

  ngOnInit(): void {
    this.dayRange = Array.from(Array(31).keys());

    const todayDate = new Date();
    const currentYear = todayDate.getFullYear();
    this.yearRange = _.range(currentYear, currentYear - 100);
    this.monthRange = monthRange;

    this.fetchCountries().subscribe(
      (countries: any) => {
        this.countries = countries;
        this.loadingCountries = false;
      }
    );
  }

  ngAfterViewInit() {
    this.f2.value.userId = this.user.id;
  }

  ngDoCheck(): void {
    if(this.dateOfBirthControl){
      jQuery(this.dateOfBirthControl.nativeElement).datetimepicker({
        format: 'YYYY-MM-DD'
      }).on('dp.change', (e) => {
        const dt = e.date.format('YYYY-MM-DD');
        this.dob = dt;
      });

      this.f2.value.userId = this.user.id;
    }
  }

  fetchCountries(){
    return this.http.get('/core/countries')
      .map(
        (response: any) => {
          return response.json();
        }
      );
  }

  fetchStates(countryId){
    this.loadingStates = true;

    return this.http.get(`/core/countries/${countryId}/states`)
      .map(
        (response: any) => {
          return response.json();
        }
      );
  }
  register(){
    this.saving = true;

    let date = null;

    if(this.pickedDay && this.pickedMonth && this.pickedYear){
      date = new Date(`${this.pickedYear}-${this.pickedMonth}-${this.pickedDay}`);

      date = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    }

    this.regService.registerStageTwo(
      this.f2.value.phone, date, this.f2.value.state, this.f2.value.gender, this.f2.value.id
    )
      .subscribe(
        (response: any) => {
          const data = JSON.parse(response._body);

          if(data.id){
            // data was successfully saved
            // todo:: move to reg-stage-three
            this.stageCompleted.emit(data);
          } else {
            // validation error was returned
            this.broadcaster.broadcast('error-occurred', data);

            console.log('there are some validation errors...');
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

  onCountryChange(event){
    const countryId = event.target.value;

    this.fetchStates(countryId).subscribe(
      (states: any) => {
        this.states = states;
        this.loadingStates = false;
      }
    );
  }
}
