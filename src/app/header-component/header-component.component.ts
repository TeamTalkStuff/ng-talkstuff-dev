import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AuthService} from '../security/auth.service';
import {User} from '../user/user';
import {Broadcaster} from '../shared/services/broadcaster';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  user: User;
  homeLink = '/';


  constructor(private authService: AuthService, private broadcaster: Broadcaster) {}

  ngOnInit() {

    this.broadcaster.on('user_logged_in').subscribe(
      (usr: User) => {
        this.initAuthUser(usr);
      }
    );

    if(this.authService.isLoggedIn()){
      this.authService.getAuthUser().subscribe(
        usr => {
          this.initAuthUser(usr);
        }
      );
    }

    this.broadcaster.on('user_logged_out').subscribe(
      () => {
        this.isLoggedIn = false;
        this.user = null;
        localStorage.clear();
      }
    );
  }

  logout(){
    this.broadcaster.broadcast('user_logged_out');
  }


  initAuthUser(usr){
    this.user = usr;
    this.isLoggedIn = true;
  }
}
