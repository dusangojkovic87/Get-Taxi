import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private Auth:AuthService) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${this.Auth.getToken()}`,
        'Access-Control-Allow-Origin':'*',
      },
    });

    return next.handle(req);

  }
}
