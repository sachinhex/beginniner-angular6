import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  template: `
  <h1>Welcome to structural directive</h1>

  <h4 *ngIf="displayName; else elseBlock" >
  Structural Directive
  </h4>

  <ng-template #elseBlock>
  <h4>Text is hidden</h4>
  </ng-template>

  <div *ngIf="displayOtherName; then thenBlock else elsePart"></div>

  <ng-template #thenBlock>
  <h4>Other Structural Directives</h4>
  </ng-template>

  <ng-template #elsePart>
  <h4>Other Name is hidden</h4>
  </ng-template>
  `, 
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {
  displayName= false;
  displayOtherName= false;
  constructor() { }

  ngOnInit() {
  }

}
