import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  @Input('parentData') public company_name;
  @Output() public childEvent = new EventEmitter(); 

  public employees=[];
  public errorMsg;

  fireEvent(){
    this.childEvent.emit("Hey child data is coming");
  }
  
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
   this._employeeService.getEmployees()
   .subscribe(data =>this.employees=data,
   error => this.errorMsg = error
   );
  }

}
