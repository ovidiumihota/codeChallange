import { UsersRoutingModule } from './users-routing.module';
import { NgModule } from '@angular/core';

import { UsersComponent } from './views/users/users.component';
import { UserComponent } from './views/user/user.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
  ],
  imports: [
    UsersRoutingModule
  ],
  providers: [],
})

export class UsersModule { }
