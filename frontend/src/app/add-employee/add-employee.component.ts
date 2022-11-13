import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../models/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  public registerForm!: FormGroup;

  constructor(
    private _employeeservice: EmployeeService,
    private _formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      emp_dob: [''],
      emp_email: [''],
      emp_fname: [''],
      emp_lname: [''],
    });
  }

  registerEmployee(): any {
    console.log('inside registerEmployee () !');

    this._employeeservice
      .registerEmployee(this.registerForm.value)
      .subscribe(() => {
        alert('Successfully Registered !');
      });
  }

}
