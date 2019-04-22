import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees=[];
  public errorMsg;
  public employeeId;
  constructor(private _employeeDetails:EmployeeService, private route: ActivatedRoute) { }

 ngOnInit() {
   this._employeeDetails.getEmployees()
   .subscribe(data =>this.employees=data,
   error => this.errorMsg = error
   );
   let id = parseInt(this.route.snapshot.paramMap.get('id'));
   this.employeeId= id;
  }

}
