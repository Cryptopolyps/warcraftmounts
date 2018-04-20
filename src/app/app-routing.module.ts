import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ],
})


export class AppRoutingModule { 
}
