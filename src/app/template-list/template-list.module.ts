import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateListComponent } from './template-list.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes=[{
  path:'',
  component:TemplateListComponent
}]
@NgModule({
  declarations: [TemplateListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TemplateListModule { }
