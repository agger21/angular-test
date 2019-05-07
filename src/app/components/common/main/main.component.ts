import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from '../../../utils/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  nowUrl = '';
  isCollapsed = false;
  triggerTemplate: TemplateRef<void> | null = null;
  sidebarNav = [
    {
      icon: 'idcard',
      title: '权限管理',
      sub: [
        {
          title: '管理员管理',
          router: 'manager',
        },
        {
          title: '角色组管理',
          router: 'role',
        },
      ]
    },
  ];
  breadcrumbs: string;

  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  constructor(
    private router: Router,
    public userSrv: UserService,
    private authSrv: AuthService
  ) { }

  ngOnInit() {
    this.nowUrl = this.router.url;
  }

  ngAfterContentChecked(): void {
    // console.log('hahahahs')
    // let arr = this.router.url.split('/');
    // arr.shift();
    this.breadcrumbs = sessionStorage.getItem('title');

    // console.log('arr: ', arr);
  }

  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  logout(): void {
    this.authSrv.logout();
  }
}


