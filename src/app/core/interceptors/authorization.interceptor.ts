import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Base64 } from 'js-base64';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const reqClone = request.clone({
      setHeaders: { Authorization: Base64.encode('admin:geoserver') },
    });
    return next.handle(reqClone);
  }
}
