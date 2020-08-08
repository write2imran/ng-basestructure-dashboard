import { Injectable } from '@angular/core';
import { UserDetail } from '../models/user-detail';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private ticketMetaKey:string = "ACCESS_TICKET";

  constructor() { }

  /**
   * login  
   * userDetail:User   
   **/
  public login(userDetail:UserDetail) : Observable<boolean> {


    localStorage.setItem(this.ticketMetaKey,"TICKET_GRANTED");

    return of(true);
    
  }

  /**
   * isUserLoggedIn
   */
  public isUserLoggedIn() :boolean {

    
    let token = localStorage.getItem(this.ticketMetaKey);

    //console.log('3. AuthService.isUserLoggedIn() retrieving localStorage token '+token);
 
    return token!=null;
  }

  /**
   * logout
   */
  public logout() {

    //console.log("logOut Key removing... "+localStorage.getItem(this.ticketMetaKey));
    localStorage.removeItem(this.ticketMetaKey);
    
  }

}
