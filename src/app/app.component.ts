import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from './security/auth.service';
import {Router} from '@angular/router';
import {User} from './user/user';
import {UtilityService} from './shared/services/utility.service';
import {Broadcaster} from './shared/services/broadcaster';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private user: User;

  constructor(private authService: AuthService,
              private router: Router,
              private broadcaster: Broadcaster,
              private utilityService: UtilityService){

  }

  ngOnInit(): void {
    this.broadcaster.on('user_logged_in').subscribe(
      (usr: User) => {
        this.router.navigate(['/user/feeds']);
        this.utilityService.notify('Welcome ' + usr.firstName);
        this.user = usr;
      }
    );

    this.broadcaster.on('user_logged_out').subscribe(
      () => {
        this.onUserLogout();
      }
    );

    if(this.authService.isLoggedIn()){
      this.authService.getAuthUser().subscribe(
        usr => {
          this.user = usr;
        }
      );
    }

  }

  onUserLogout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
