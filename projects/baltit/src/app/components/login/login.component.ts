import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'sih-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  isSubmitted:boolean = false;

  constructor(private authService:AuthService, private router:Router, private formBuilder: FormBuilder ) {

   }

  ngOnInit() {

    if(localStorage.getItem("ACCESS_TICKET") != null)
       this.router.navigate(['/home']);

    //console.log('Login.ngOnInit()');
    this.loginForm  =  this.formBuilder.group({
      email: ['username@gmail.com', Validators.required],
      password: ['YourPassword!@!@!', Validators.required]
    });
  
  }

  get f() { return this.loginForm.controls; }

  /**
   * login
   */
  public login() {

    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }

    this.authService.login(this.loginForm.value).subscribe(r => {
      if(r) 
        this.router.navigate(['/home']);    
      else 
        this.router.navigate(['/login']);    
    });

    

  }

}
