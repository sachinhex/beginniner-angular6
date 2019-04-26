import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
  public selectedId;

  fireEvent(){
    this.childEvent.emit("Hey child data is coming");
  }
  
  constructor(private _employeeService:EmployeeService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
   this._employeeService.getEmployees()
   .subscribe(data =>this.employees=data,
   error => this.errorMsg = error
   );
   this.route.paramMap.subscribe((params: ParamMap) =>{
    let id =parseInt(params.get('id'));
    this.selectedId= id;
  });
  }
  onSelect(employee){
    // this.router.navigate(['/empDetail', employee.id]);
    this.router.navigate([employee.id],{relativeTo:this.route}); //relative navigation
  }
  isSelected(employee){
    return employee.id === this.selectedId;
  }

}
