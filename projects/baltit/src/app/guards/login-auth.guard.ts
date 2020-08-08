import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth-service.service';

@Injectable({
  providedIn: 'root'
})

export class LoginAuthGuard implements CanActivate {

  constructor(private authService:AuthService, private router: Router) {
    
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) : Observable<boolean> | Promise<boolean> | boolean {

    let status:boolean = this.authService.isUserLoggedIn();
    if(!status) 
      this.router.navigate(['/login'])
    return status;
    
  }

}
