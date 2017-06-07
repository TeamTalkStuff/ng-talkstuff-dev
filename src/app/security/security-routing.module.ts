import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {SecurityComponent} from './security.component';
import {RegistrationPageComponent} from './registration-page/registration-page.component';
import {RegStepOnePageComponent} from './reg-step-one-page/reg-step-one-page.component';

const securityRoutes: Routes = [
  {
    path: 'security',
    component: SecurityComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  },
  {
    path: 'signup',
    component: RegistrationPageComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(securityRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SecurityRoutingModule { }
