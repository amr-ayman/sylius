import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class ApiRequestInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq: HttpRequest<any> = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer SampleToken',
        'Access-Control-Allow-Origin': '*'
      }
    });
    return next.handle(apiReq);
  }
}
