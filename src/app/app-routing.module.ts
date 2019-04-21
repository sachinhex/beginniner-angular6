import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes:Routes = [
  {path: 'empList',component: EmployeeListComponent},
  {path: 'empDetail',component: EmployeeDetailComponent},
  // {path: '',redirectTo: '/list',pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
export const routingComponents = [EmployeeListComponent, EmployeeDetailComponent];
