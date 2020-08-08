import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingRoutingModule } from './meeting-routing.module';
import { MeetingComponentComponent } from './meeting-component/meeting-component.component';


@NgModule({
  declarations: [MeetingComponentComponent],
  imports: [
    CommonModule,
    MeetingRoutingModule
  ]
})
export class MeetingModule { }
