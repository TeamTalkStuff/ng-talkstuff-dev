import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FeedsComponent} from './feeds/feeds.component';
import {UserHomeComponent} from './user-home/user-home.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UserHomeComponent,
    children: [
      {
        path: 'feeds',
        component: FeedsComponent,
      },
      {
        path: '',
        redirectTo: '/feeds',
        pathMatch: 'full'
      },
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(userRoutes),
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class UserRoutingModule { }
