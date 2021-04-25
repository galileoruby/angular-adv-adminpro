import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations:
  [
      LoginComponent,
      RegisterComponent,
    ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ]
})
export class AuthModule { }
