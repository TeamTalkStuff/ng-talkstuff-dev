import {XHRBackend, Http, RequestOptions} from '@angular/http';
import {InterceptedHttp} from './http.interceptor';
import {Broadcaster} from './shared/services/broadcaster';

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, broadcaster: Broadcaster): Http {
  return new InterceptedHttp(xhrBackend, requestOptions, broadcaster);
}
