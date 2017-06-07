import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class RegistrationService {

  constructor(private http: Http) { }

  registerStageOne(firstName: string, lastName: string, username: string, email: string, password: string) {
    return this.http.post('/users/register/stage-one',
      {firstName: firstName, lastName: lastName, username: username, email: email, password: password})
      .do(
        (response) => {
          return response.json();
        }
      ).catch(
        error => {
          return error;
        }
      );
  }

  registerStageTwo(phone: string, dateOfBirth: string, state: any, gender: string, userId: number) {
    return this.http.post('/users/register/stage-two',
      {phone: phone, dateOfBirth: dateOfBirth, state: state, gender: gender, id: userId})
      .do(
        (response) => {
          return response.json();
        }
      ).catch(
        error => {
          return error;
        }
      );
  }

  registerStageFour(userId: number, profileMedia: any) {
    return this.http.post('/users/register/stage-four',
      {userId: userId, profileMedia: profileMedia})
      .do(
        (response) => {
          return response.json();
        }
      ).catch(
        error => {
          return error;
        }
      );
  }
}
