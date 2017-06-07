import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './security/auth.service';

@Injectable()
export class HomePageResolverService implements Resolve<any>{

  constructor(private authService: AuthService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/user/feeds']);
    } else {
      return null;
    }
  }




}
