import {Component, OnInit} from '@angular/core';
import {ManagerService} from '../../service/manager.service';
import {ResTpl} from '../../models/ResTpl';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.less']
})
export class ManagerComponent implements OnInit {

  constructor(
    private managerSve: ManagerService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  private listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
  ];
  private addOption = false;
  private boxTitle = '添加管理员';
  private roleList = ['Jack', 'Tome', 'Jessica', 'Adsion']
  private roleValue;
  private username = '';
  private mailValue = '';
  private pwdValue = '';
  private stateValue = 0;
  private hero$: number;


  ngOnInit() {

    this.managerSve.getManager({
      name: '',
      pageNum: 1,
      pageSize: 10
    }).subscribe((res: ResTpl) => {
      if (res.code === 200) {
        // this.listOfData = res.data
      }
      console.log(res, '返回的值');
    });
    this.route.data.subscribe(data => console.log(data, '数据'));
    this.route.url.subscribe(url => console.log(url[0], 'url'));
    // console.log( JSON.stringify(Location));

    // this.hero$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     // this.service.getHero(params.get('id'))
    //     console.log(params.get('id'), '获取的id')
    //   )
    // );
  }

  showAdd(): void {
    this.addOption = true;
  }


  handleOk(): void {
    console.log('Button ok clicked!');
    this.addOption = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.addOption = false;
  }

  toUrl() {
    console.warn('c触发了')
    // this.router.navigate(['/Dashboard'], {queryParams: { name: 1 }});
    this.router.navigateByUrl('/Dashboard?name=1&id=123');
  }

}
