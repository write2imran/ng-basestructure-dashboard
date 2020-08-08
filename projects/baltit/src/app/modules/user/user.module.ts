import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponentComponent } from './user-component/user-component.component';


@NgModule({
  declarations: [UserComponentComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
