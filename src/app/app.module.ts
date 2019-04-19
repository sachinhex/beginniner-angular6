import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './emp/list.component';
import { CreateComponent } from './emp/create.component';
import { TestComponent } from './test/test.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';



const appRoutes:Routes = [
  {path: 'list',component: ListComponent},
  {path: 'create',component: CreateComponent},
  {path: '',redirectTo: '/list',pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    TestComponent,
    StructuralDirectiveComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
