import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  public store: any;
  public seStore: any;

  constructor(private notification: NzNotificationService) {
    this.store = localStorage;
    this.seStore = sessionStorage;
  }

  public successHelper(res: HttpResponse<any>): void {
    console.log(res, 'res')
    switch (res.body.code) {
      case 401:
        this.store.clear();
        this.notification.error('未授权', '请重新登录');
        this.seStore.setItem('RedirectUrl', location.pathname);
        setTimeout(() => {
          location.href = 'login';
        }, 1000);
        break;
      case 403:
        this.notification.error('错误', '禁止访问');
        break;
      case 404:
        this.notification.error('未找到', '未找到资源,请检查');
        break;
      case 405:
        this.notification.error('错误', '此方法不允许');
        break;
      case 406:
        this.notification.error('错误', '此方法不接受,请检查');
        break;
      case 500:
        this.notification.error('错误', res.body.msg || res.body.data);
        break;
      case 503:
        this.notification.error('连接被拒绝', '服务不可用');
        break;
      case 504:
        this.notification.error('网关超时', '请与运维小郭联系');
        break;
      default:
        this.notification.error('错误', '服务端未知错误');
        break;
    }
  }

  public errorHelper(err: HttpErrorResponse): void {
    console.log(err, 'err')
    switch (err.status) {
      case 403:
        this.notification.error('错误', '禁止访问');
        break;
      case 404:
        this.notification.error('未找到', '未找到资源,请检查');
        break;
      case 405:
        this.notification.error('错误', '此方法不允许');
        break;
      case 406:
        this.notification.error('错误', '此方法不接受,请检查');
        break;
      case 500:
        // this.notification.error('错误', err.error.msg || err.error.data);
        break;
      case 503:
        this.notification.error('连接被拒绝', '服务不可用');
        break;
      case 504:
        this.notification.error('网关超时', '请与运维小郭联系');
        break;
      default:
        this.notification.error('错误', '服务端未知错误');
        break;
    }
  }
}
