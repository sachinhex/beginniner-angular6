import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './emp/list.component';
import { CreateComponent } from './emp/create.component';
import { TestComponent } from './test/test.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StructuralDirectiveComponent,
    CreateComponent,
    ListComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
