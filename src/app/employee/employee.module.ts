import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    EmployeeManagementComponent
  ],
  imports: [
    // BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
