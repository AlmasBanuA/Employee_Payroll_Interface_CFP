import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  //injected dependencies which is required to render view properly 
  constructor(private router: Router, private service: EmployeeService) { }
  employee: any;


  ngOnInit(): void {

    //Subscribe Invokes an execution of an Observable and registers Observer handlers for notifications it will emit.
    this.service.getEmployee().subscribe(data => {
      this.employee = data;
    });
  }

  //when an onAddUser function is called, it will naviagte to the form view
  onAddUser() {
    //it will navigate imperatively in your component classes
    this.router.navigate(["form"]);
  }

  //call deleteEmployeeById method of service to delete employee
  deleteById(Id: number) {
    this.service.deleteEmployee(Id).subscribe(data => {
      //when a user get deleted from databse it will print data is deleted in console
      //with the help of window.location.reload:-when we delete user the when we dont have to reload the page again
      window.location.reload()
    });
  }

  //navigates page to update which has form component to load existing employee record for updation
  editById(Id: number, employee: any) {
    this.router.navigate(['update', Id]);
  }

}
