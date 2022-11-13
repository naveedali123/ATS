import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../models/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  employee: Employee = new Employee();

  public checkinForm!: FormGroup;

  constructor(
    private _employeeservice: EmployeeService,
    private _formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.checkinForm = this._formBuilder.group({
      emp_id: []
    });
  }
  
  registercheckin(): any {
    console.log('inside Employeecheck_in () !');

    this._employeeservice
      .registercheckin(this.checkinForm.value)
      .subscribe((data) => {
        if(data){
          alert("Successful");
        }
        
      });
  }

}
