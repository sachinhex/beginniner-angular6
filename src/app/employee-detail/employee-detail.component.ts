import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute,Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees=[];
  public errorMsg;
  public employeeId;
  constructor(private _employeeDetails:EmployeeService, private route: ActivatedRoute,
    private router: Router) { }

 ngOnInit() {
   this._employeeDetails.getEmployees()
   .subscribe(data =>this.employees=data,
   error => this.errorMsg = error
   );
  //  let id = parseInt(this.route.snapshot.paramMap.get('id'));
  //  this.employeeId= id;
  this.route.paramMap.subscribe((params: ParamMap) =>{
    let id =parseInt(params.get('id'));
    this.employeeId= id;
  });
  }
  goPrev(){
    let prevoiusId= this.employeeId - 1;
    // this.router.navigate(['/empDetail', prevoiusId])
    this.router.navigate(['../',prevoiusId],{relativeTo:this.route}); //relative navigation
  }
  goNext(){
    let nextId= this.employeeId + 1;
    // this.router.navigate(['/empDetail', 
    this.router.navigate(['../',nextId],{relativeTo:this.route}); //relative navigation
    
  }
  gotoEmployees(){
    let selectedId= this.employeeId ? this.employeeId :null;
    // this.router.navigate(['/empList', {id:selectedId}]) //optional Route Parameter
    this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route}); //relative navigation
  }
  showOverView(){
    this.router.navigate(['overview'],{relativeTo:this.route});
  }
  showContact(){
    this.router.navigate(['contact'],{relativeTo:this.route});
  }

}
