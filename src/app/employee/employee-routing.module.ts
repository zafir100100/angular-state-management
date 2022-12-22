import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'manage-employee',
    pathMatch: 'full'
  },
  {
    path: 'manage-employee',
    component: EmployeeManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
