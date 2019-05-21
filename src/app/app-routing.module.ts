import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';

const routes:Routes = [
  {path: '',redirectTo: '/employeelist', pathMatch: 'full'},
  {path: 'template-list',
  loadChildren: './template-list/template-list.module#TemplateListModule'
  },
  {path: 'employeelist', component: EmployeeListComponent},
  {path: 'empDetail', component: EmployeeDetailComponent},
  {path: 'employeelist/:id',
   component: EmployeeDetailComponent,
   children: [
     {path: 'overview', component: EmployeeOverviewComponent},
     {path: 'contact', component: EmployeeContactComponent}
   ]
  },
  {path: "**",component: PageNotFoundComponent}
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
export const routingComponents = [EmployeeListComponent, EmployeeDetailComponent, PageNotFoundComponent];
