import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamRoutingModule } from './stream-routing.module';
import { StreamComponentComponent } from './stream-component/stream-component.component';


@NgModule({
  declarations: [StreamComponentComponent],
  imports: [
    CommonModule,
    StreamRoutingModule
  ]
})
export class StreamModule { }
