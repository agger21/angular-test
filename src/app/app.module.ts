import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {ViserModule} from 'viser-ng';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainComponent} from './components/common/main/main.component';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ManagerComponent} from './components/manager/manager.component';
import {HttpClientInterceptor} from './utils/interceptor/httpInterceptor.service';
import {ProjectStatusPipeText, ProjectStatusPipe, ProjectColorPipe} from './pipe/project.pipe';
import {DashboardService} from './service/dashboard.service';
import {DateService} from './service/date.service';
import {ManagerService} from './service/manager.service';
import {MsgService} from './service/msg.service';
import {ProjectService} from './service/project.service';
import {UserService} from './service/user.service';


/** 配置 angular i18n **/
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
import {
  NzButtonModule,
  NzFormModule,
  NzInputModule,
  NzTableModule,
  NzLayoutModule,
  NzMenuModule,
  NzAvatarModule,
  NzBreadCrumbModule,
  NzDropDownModule,
  NzIconModule,
  NzCardModule,
  NzDividerModule,
  NzSelectModule,
  NzTabsModule,
  NzStepsModule,
  NzModalModule,
  NzMessageModule
} from 'ng-zorro-antd';

@NgModule({
  // 引入当前项目运行的组件
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    DashboardComponent,
    ManagerComponent,
    ProjectStatusPipeText,
    ProjectStatusPipe,
    ProjectColorPipe
  ],
  // 引入当前模块运行依赖的其他模块
  imports: [
    BrowserModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ViserModule,
    // 单独引入
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzTableModule,
    NzLayoutModule,
    NzMenuModule,
    NzAvatarModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    NzIconModule,
    NzCardModule,
    NzDividerModule,
    NzSelectModule,
    NzTabsModule,
    NzStepsModule,
    NzModalModule,
    NzMessageModule
  ],
  // 定义的服务，回头放在这里
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true},
    DashboardService,
    DateService,
    ManagerService,
    MsgService,
    ProjectService,
    UserService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  // 指定应用的主视图（称为根组件） 通过引导根AppModule来启动应用，一般写根组建
  bootstrap: [AppComponent]
})
// 根组件一般不需要导出任何东西
export class AppModule {
}
