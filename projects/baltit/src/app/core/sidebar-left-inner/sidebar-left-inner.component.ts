import { environment } from './../../../environments/environment.prod';

import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-left-inner',
  templateUrl: './sidebar-left-inner.component.html'
})
export class SidebarLeftInnerComponent {

  public username:string = environment.username;
}
