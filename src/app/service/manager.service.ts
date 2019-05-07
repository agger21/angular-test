import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ResTpl } from '../models/ResTpl';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(
    private http: HttpClient,
    private nzMessage: NzMessageService,

  ) { }


  // 获取管理员列表
  getManager(param): Observable<any> {
    return this.http.get(`admin/user/show?name=${param.name}&page_num=${param.pageNum}&page_size=${param.pageSize}`).pipe(
      tap((res: ResTpl) => {
        // this.nzMessage.create('info', res.msg);
      })
    );
  }
}
