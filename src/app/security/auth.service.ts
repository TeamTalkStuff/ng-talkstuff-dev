import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http: Http, private router: Router) { }

  logout(){
    localStorage.clear();
  }

  isLoggedIn(): boolean {
    if(localStorage.getItem('authToken')) return true;

    return false;
  }

  login(username: string, password: string): Observable<any>{

    return this.http.post('/security/talkstuff/login',
      {username : username, password : password})
      .map(
        (response: any) => {
          const token = response.json().token;
          if(token){
            localStorage.setItem('authToken', token);
            this.storeAuthUser();

            return token;
          }
          return null;
        }
      );
  }

  storeAuthUser(): void{
    this.getAuthUser()
      .subscribe(
        usr => {
          localStorage.setItem('authUser', JSON.stringify(usr));
          return usr;
        }
      );
  }

  getAuthUser(): Observable<any> {
    // check if we have a user object in local storage
    const user = JSON.parse(localStorage.getItem('authUser'));

    if(user && user.id) {
      return new Observable(
        observer => {
          observer.next(user);
        }
      )
    } else {
      return this.fetchUserFromServer(localStorage.getItem('authToken'));
    }
  }

  fetchUserFromServer(token: string): any{
   /* const headers = new Headers({ 'Authorization': 'Bearer ' + token });
    const options = new RequestOptions({ headers: headers });
*/
    const decodedToken = this.decodeToken();
    if(decodedToken)
      return this.http.get('/users/' + decodedToken.sub)
        .map(
          response => {
            return response.json();
          },
          error => console.log(error)
        );
  }

  decodeToken(){
    const token = localStorage.getItem('authToken');
    if(token){
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-','+').replace('_','/');
      return JSON.parse(window.atob(base64));
    }

    return null;
  }
}
