import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UtilityService} from './services/utility.service';
import {Broadcaster} from './services/broadcaster';
import {UploaderService} from './services/uploader.service';
import {SafePipe} from './pipes/safe.pipe';
import {LoaderComponent} from './loader/loader.component';
import { UserAvatarComponent } from './user-avatar-component/user-avatar-component.component';
import { WeatherComponent } from './weather-component/weather-component.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SafePipe,
    LoaderComponent,
    UserAvatarComponent,
    WeatherComponent
  ],
  providers: [
    UtilityService,
    Broadcaster,
    UploaderService
  ],
  exports : [
    SafePipe,
    LoaderComponent,
    UserAvatarComponent,
    WeatherComponent
  ]
})
export class SharedModule { }
