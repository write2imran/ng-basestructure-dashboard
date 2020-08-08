import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponentComponent } from './team-component/team-component.component';


@NgModule({
  declarations: [TeamComponentComponent],
  imports: [
    CommonModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }
