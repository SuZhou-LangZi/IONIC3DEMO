import { Component, Input, Output, EventEmitter, Host, Inject, forwardRef } from '@angular/core';

import { UserComponent } from '../user/user';

import { HeroService } from '../../services/hero.service';

import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the UserInfoComponent component.
 * 用户管理子组件
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-info',
  templateUrl: 'user-info.html'
})
export class UserInfoComponent {

  @Input() userID: any;
  @Input() content: string;
  @Input() userObject: any;
  @Output() userList = new EventEmitter<any>();
  @Output() changeNumber: EventEmitter<number> = new EventEmitter();

  Number: number = 0;
  customerObject: any;
  text: string;
  customerRJX: any;

  private userInfoTab: any;
  subscription: Subscription;

  /**
   * 子组件获取父组件实例
   * @param app 
   */
  constructor( @Host() @Inject(forwardRef(() => UserComponent)) app: UserComponent, public service: HeroService) {
    console.log('Hello UserInfoComponent Component');
    this.text = 'Welcome to Page-UserInfo!';
    this.userInfoTab = '用户详情组件方法...';

    // service.i = 110119;

    service.change.subscribe((value: number) => {
      this.customerObject = value;
    })

    this.subscription = service.Status$.subscribe(message => {
      console.log('message===>' + message);
      this.customerRJX = message;
    });

    setInterval(() => {
      app.i++;
      app.text = '通过实例改变父组件参数';

    }, 1000)

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  changeNumberID() {
    this.changeNumber.emit(++this.Number);
  }

  userInfo() {
    console.log(this.userObject);
    console.log('===userObject===' + this.userObject.userName);
    console.log('UserInfo...用户详情组件方法');
  }

}
