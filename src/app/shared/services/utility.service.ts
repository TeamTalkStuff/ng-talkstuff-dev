import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

declare var UIkit: any;

@Injectable()
export class UtilityService {

  constructor() { }

  notify(message: string, type: string = 'success'){
    UIkit.notification.closeAll();

    UIkit.notification({
      message : message,
      status: type,
      pos: 'bottom-center',
      timeout: 5000
    });
  }

  public getAuthUser(){
    let user: any = localStorage.getItem('authUser');

    if(user){
      user = JSON.parse(user);

      if(user.id) {
        return user;
      }
    }

    return null;
  }

  public getLocation(){
    const locationObservable = new Subject();
    const nav = navigator.geolocation;

    locationObservable.next(null);

    if (nav) {
      navigator.geolocation.getCurrentPosition((coord) => {
        locationObservable.next(coord);
      });
    }

    return locationObservable.asObservable();
  }
}
