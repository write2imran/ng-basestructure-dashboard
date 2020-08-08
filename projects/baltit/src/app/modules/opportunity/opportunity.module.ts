import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunityRoutingModule } from './opportunity-routing.module';
import { OpportunityComponentComponent } from './opportunity-component/opportunity-component.component';


@NgModule({
  declarations: [OpportunityComponentComponent],
  imports: [
    CommonModule,
    OpportunityRoutingModule
  ]
})
export class OpportunityModule { }
