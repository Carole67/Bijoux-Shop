import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthentificationService } from './authentification.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthentificationService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });
    return next.handle(request);
  }
}