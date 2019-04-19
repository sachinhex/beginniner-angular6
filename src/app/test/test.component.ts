import { Component, OnInit,Input,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <div>
    <h2>Welcome {{name}}</h2>
    </div>
    <h2>{{2+2}}</h2>
    <h2>{{"Welcome " + name}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{greetUser()}}</h2>
    <h2>{{siteUrl}}</h2>
    <input type="text"  [id]="myId" value="Sachin">
    <input type="text" bind-disabled="isDisabled" id={{myId}} value="Sachin">
    <h2 class="text-success">Sachin</h2>
    <h2 class="text-special" [class]="successClass">Sachin</h2>
    <h2 class="text-special" [class.text-danger]="hasError">Sachin code</h2>
    <h3 [ngClass]="messageClasses">SACHIN CODEVOILATION</h3>
    <h1 [style.color]="hasError?'green':'red'"> Style binding</h1>
    <h1 [ngStyle]="highlightColor"> Style binding 2</h1>
    <button (click)="onClick($event)">CLICK ME</button> <br>
    <p> Template Ref var:
    <input #myInput type="text"><button (click)="logMessage(myInput)">See template ref var</button>
    {{greeting}}
    <p>two way binding:</p>
    <input [(ngModel)]="name" type="text">
    {{name}}
    <h2>{{'Inherited from parent:'+ parentname | uppercase}}</h2>
    <button (click)="fireEvent()">Click</button>
   `,
  styles: [`
  div{
    color: red;
  }
  .text-success{
    color: green;
  }
  .text-danger{
    color: red;
  }
  .text-special{
    font-style:italic;
  }

  `]
})
export class TestComponent implements OnInit {
public name="Sachin kumar";
public siteUrl= window.location.href;
public myId="testId";
public isDisabled= false;
public successClass= "text-success";
public hasError= false;
public isSpecial= false;
public greeting= '';
public messageClasses={
  "text-success": !this.hasError,
  "text-danger": this.hasError,
  "text-special": this.isSpecial
}
public highlightColor={
  color: "blue",
  fontStyle: "italic",
}
@Input('parentData') public parentname ;
@Output() public childEvent= new EventEmitter();

fireEvent(){
  this.childEvent.emit("Hey Code Working from child to parent component");
}

onClick(event){
console.log("WELCOME CLICK WORKS");
console.log(event);
this.greeting =event.type;
}
logMessage(value){
  console.log(value);
}

greetUser(){
  return "hello " + this.name;
}
  constructor() { }

  ngOnInit() {
  }

}
