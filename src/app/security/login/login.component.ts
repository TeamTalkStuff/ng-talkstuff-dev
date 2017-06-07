import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import 'rxjs/add/operator/do';
import {UtilityService} from '../../shared/services/utility.service';
import {Broadcaster} from '../../shared/services/broadcaster';


@Component({
  selector: 'app-security-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService,
              private utilityService: UtilityService,
  private broadcaster: Broadcaster) { }

  ngOnInit() {
  }

  onLogin(form: NgForm){
    this.utilityService.notify('Signing in.....');

    this.authService.login(form.value.username, form.value.password)
      .subscribe(
        token => {
          if(token){
            this.authService.getAuthUser().subscribe(
              user => {
                this.broadcaster.broadcast('user_logged_in', user);
              }
            );
          } else {
            alert('Are you new to TalkStuff? Please Register');
          }
        },
        error => {
          console.log(error);
          this.utilityService.notify('Incorrect login details.', 'danger');
        }
      );
  }

  cancel() {
    this.closePopup();
  }
  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null }}]);
  }

}
