import { NgModule } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info';
import { UserComponent } from './user/user';
@NgModule({
	declarations: [UserInfoComponent,
    UserComponent],
	imports: [],
	exports: [UserInfoComponent,
    UserComponent]
})
export class ComponentsModule {}
