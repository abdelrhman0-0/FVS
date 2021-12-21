import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class InterseptorTokenService implements HttpInterceptor
{
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const authReq = req.clone({
       headers : req.headers.append('Authorization',`Bearer ${this._AuthService.getToken()}`)
       });
    return next.handle(authReq);
  }

  constructor(public _AuthService:AuthService) { }
}
