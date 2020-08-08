import { CaseComponent } from './case-component/case-component';
import { CaseRoutingModule } from './case-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CaseComponent],
  imports: [
    CommonModule,
    CaseRoutingModule
  ],
  exports: [
    CaseComponent
  ]
})
export class CaseModule { }
