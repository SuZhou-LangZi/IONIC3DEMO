import { Component, ViewChild } from '@angular/core';

import { UserInfoComponent } from '../user-info/user-info';

import { HeroService } from '../../services/hero.service';

/**
 * Generated class for the UserComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user',
  templateUrl: 'user.html'
})
export class UserComponent {

  @ViewChild("UserInfoComponent") child: UserInfoComponent;

  text: string;
  i: number = 0;

  userXXX: any;//{ userName: '张三', userID: '20180900000014' };

  constructor(service: HeroService) {
    console.log('Hello UserComponent Component');
    this.text = 'Hello World';

    service.i = 120119;
    service.customerName = '通过service方式通信...';

    setInterval(() => {
      this.i++;
      this.userXXX = { userName: '张三', userID: '20180900000014' };

      service.change.emit('20180914' + this.i + '【数据生成】');

      service.StatusMission('20180914父组件通过订阅模式参数传递:' + this.i);

    }, 1000)

  }

  numberIChange(i: number) {
    this.i = i;
    console.log('父组件方法：numberIChange');
  }

  changeClick() {
    this.child.userInfo();
  }

}
