import { environment } from './../../../environments/environment.prod';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth-service.service';

@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html'
})
export class HeaderInnerComponent {

  private today:Date = new Date();
  private fullname:string = environment.fullname;
  private username:string = environment.username;
  
  constructor(private authService:AuthService, private router:Router) {


  }

  /**
   * logout
   */
  public logout() {
    
    //console.log("Logout called");
    this.authService.logout();
    this.router.navigate(['/login']);

  }    
}
