import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SecurityRoutingModule} from './security-routing.module';
import {LoginComponent} from './login/login.component';
import { SecurityComponent } from './security.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth.service';
import {SharedModule} from '../shared/shared.module';
import {RegistrationPageComponent} from './registration-page/registration-page.component';
import { RegStepOnePageComponent } from './reg-step-one-page/reg-step-one-page.component';
import { RegStepTwoPageComponent } from './reg-step-two-page/reg-step-two-page.component';
import {RegistrationService} from './registration-service.service';
import { RegStepThreePageComponent } from './reg-step-three-page/reg-step-three-page.component';
import { RegStepFourPageComponent } from './reg-step-four-page/reg-step-four-page.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SecurityRoutingModule
  ],
  declarations: [
    LoginComponent,
    SecurityComponent,
    RegistrationPageComponent,
    RegStepOnePageComponent,
    RegStepTwoPageComponent,
    RegStepThreePageComponent,
    RegStepFourPageComponent
  ],
  providers: [AuthService, RegistrationService]
})
export class SecurityModule { }
