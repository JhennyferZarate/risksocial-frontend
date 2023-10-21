import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import {StyleClassModule} from 'primeng/styleclass';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginComponent,
    RegistroComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    StyleClassModule
  ]
})
export class AuthModule { }
