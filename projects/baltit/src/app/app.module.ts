import { LeadModule } from './modules/lead/lead.module';
import { ContactModule } from './modules/contact/contact.module';
import { AccountModule } from './modules/account/account.module';
import { HomeModule } from './modules/home/home.module';
import { CallModule } from './modules/call/call.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from  '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { CoreModule } from './core/core.module';
import { LayoutModule } from 'angular-admin-lte';
import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { adminLteConf } from './admin-lte.conf';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    ReactiveFormsModule,

    CoreModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, 
    MaterialBarModule,

    // Domain Modules
    // HomeModule,
    CallModule,
    // AccountModule,
    // ContactModule,
    // LeadModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
