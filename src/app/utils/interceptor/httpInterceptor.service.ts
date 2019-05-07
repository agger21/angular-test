import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {HelperService} from './helper.service';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
  public baseUrl: string = 'http://geekapi.yipage.cn/';
  public store: any;

  constructor(private helper: HelperService) {
    this.store = localStorage;
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({
      url: this.baseUrl + req.url,
      setHeaders: {
        'X-Requested-With': 'XMLHttpRequest',
        // 'Authorization': this.store.getItem('geekEnd_token') || '',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNTU2NzgzMDA5fQ.AjDCD6ofrEeB98kUFZ6PXyTdgNWjy9sG9dSIckawEP8',
      },
      // withCredentials: true, // same origin not use
    });

    return next.handle(request).pipe(tap(
      (res: HttpResponse<any>) => {
        if (res instanceof HttpResponse) {
          // this.helper.successHelper(res);
        }
        return res.body;
      },
      (err: HttpErrorResponse) => {
        if (err instanceof HttpErrorResponse) {
          this.helper.errorHelper(err);
        }
        return err.error;
      }, () => {
        //
      }));
  }
}
