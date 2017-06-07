import {TestPageComponent} from './test-page-component/test-page-component.component';
import {HomePageComponent} from './home-page-component/home-page-component.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomePageResolverService} from './home-page-resolver.service';



const appRoutes: Routes = [
  {
    path: 'talk-talk',
    component: TestPageComponent,
  },
  {
    path: '',
    component : HomePageComponent,
  },
  {
    path: 'user',
    loadChildren: 'app/user/user.module#UserModule',
    // canLoad: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ],
  providers: [HomePageResolverService]
})
export class AppRoutingModule { }
