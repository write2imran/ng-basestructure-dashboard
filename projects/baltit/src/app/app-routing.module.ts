
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginAuthGuard } from './guards/login-auth.guard';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', canActivate: [LoginAuthGuard], component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', loadChildren: './modules/home/home.module#HomeModule',  data: { title: 'Home' } },
      { path: 'accounts', pathMatch: 'full',  loadChildren: './modules/account/account.module#AccountModule', data: { title: 'Accounts' } },     
      { path: 'calls', pathMatch: 'full', loadChildren: './modules/call/call.module#CallModule', data: { title: 'Calls' } },
      { path: 'cases', pathMatch: 'full',  loadChildren: './modules/case/case.module#CaseModule', data: { title: 'Cases' } },      
      { path: 'contacts', pathMatch: 'full',  loadChildren: './modules/contact/contact.module#ContactModule', data: { title: 'Contacts' } },            
      { path: 'leads', pathMatch: 'full',  loadChildren: './modules/lead/lead.module#LeadModule', data: { title: 'Leads' } },            
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    { 
      useHash: true,
      enableTracing: false 
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
