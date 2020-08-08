import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallRoutingModule } from './call-routing.module';
import { CallComponent } from './call-component/call-component';



@NgModule({
  declarations: [
    CallComponent 
  ],
  imports: [
    CommonModule,
    CallRoutingModule
  ],
  exports: [
    CallComponent

  ]
})
export class CallModule { }
