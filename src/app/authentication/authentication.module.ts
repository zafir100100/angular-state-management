import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    // BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
