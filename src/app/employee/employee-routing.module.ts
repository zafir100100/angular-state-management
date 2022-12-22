import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';
import { EmployeeResolver } from './components/employee.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee-list',
    pathMatch: 'full'
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent,
    resolve: { employees: EmployeeResolver }
  },
  {
    path: 'employee-registration',
    component: EmployeeManagementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
