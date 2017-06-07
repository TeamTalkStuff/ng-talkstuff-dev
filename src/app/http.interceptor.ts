import {Injectable} from '@angular/core';
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {AppConfig} from './config';
import {Broadcaster} from './shared/services/broadcaster';

@Injectable()
export class InterceptedHttp extends Http {

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private broadcaster: Broadcaster) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {

    return super.request(url, options).catch(res => {
      const responseData = res.json();

      if(responseData.error && (responseData.error === 'token_expired')){
        console.log('token has expired');
        this.broadcaster.broadcast('user_logged_out');
      }

      return Observable.of(res);
    }).finally(() => {
      //
    });
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return super.get(url, this.getRequestOptionArgs(options));
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return super.post(url, body, this.getRequestOptionArgs(options));
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return super.put(url, body, this.getRequestOptionArgs(options));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return super.delete(url, this.getRequestOptionArgs(options));
  }

  private updateUrl(req: string) {
    return  AppConfig.serverApi + req;
  }

  private getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    options.headers.append('Content-Type', 'application/json');
    options.headers.append('X-Requested-With', 'XMLHttpRequest');

    const token = localStorage.getItem('authToken');

    if (token) {
      options.headers.append('Authorization', 'Bearer ' + token);
    }

    return options;
  }

  private showLoader() {
    console.log('show loader');
  }

  private hideLoader() {
    console.log('hide loader');
  }
}
