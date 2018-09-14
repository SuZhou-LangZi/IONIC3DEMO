import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContactPage } from '../contact/contact';

import { StoragService } from '../../services/storag.service';
import { NgForm } from '@angular/forms';

import { UserInfo } from '../exampleObject/userObject';

import { UserComponent } from '../../components/user/user';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  @Input() hero: any;
  @Output() deleteRequest = new EventEmitter<any>();

  private list: any;
  private html: String;
  private morePage: any;
  private arry: any;
  private heroes: any;
  private user: UserInfo[];

  constructor(public navCtrl: NavController, private storge: StoragService) {
    this.morePage = ContactPage;
    this.storge.setItem('UserName', '黄老板');
    this.storge.setItem('UserAge', '26');
    this.user = [];
    this.heroes = [{ heroeID: '0010', heroeName: '技术' }, { heroeID: '0020', heroeName: '科普' }, { heroeID: '0030', heroeName: '围绕' }];

  }

  deleteSelectData() {
    
  }

  ngOnInit() {
    this.html = "<h2>这是一个 h2 用[innerHTML]来解析</h2>";
    this.list = [{ ItemNo: '010', ItemName: 'Tom' }, { ItemNo: '020', ItemName: 'TXm' }, { ItemNo: '030', ItemName: 'TYm' }];
  }

  stu = {};//空对象

  public issubmit: boolean = false;

  showOne(str: string) {
    console.info(str);
  }

  onSubmit(model: NgForm) {
    // console.info(model.valueChanges);
    //因为只读不能设置操作按钮的disabled属性
    //model.invalid=false;
    console.log(this.user);
    // 执行对象
    this.user.push(new UserInfo('2018090700000001', '永琪', '123456', 'www.baidu.com', '20', '20000000000', '1', 'red'));

    console.log(this.user[0].userName);

    this.issubmit = true;
    setTimeout(() => {
      this.issubmit = false;
    }, 1000);
    console.log(this.user);
  }

  deleteHero(heroe) {
    console.log(heroe);
    console.log('删除案例...');
  }

  onSave() {
    console.log('数据保存...');
  }

  // 页面跳转
  goToUserInfo() {
    this.navCtrl.push(ContactPage);
  }

  getUserInfo() {
    console.log(this.storge.getItem('UserName'));
  }

  getService() {
    // this.storge.getService().then(res => {
    //   console.log(res);
    // }).catch(res => {
    //   console.log('异常捕获！');
    // });

    this.storge.getData('rest/mobile/customer/entKeymanInfoSave.view', '', '').then(res => {
      console.log('获取请求相应数据！');
      console.log(res);
    }).catch(res => {
      console.log('异常捕获！');
    });

  }

}
