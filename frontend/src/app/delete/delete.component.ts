import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { Employee } from '../models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  viewManagersStatus: boolean = false;
  anyButtonClicked: boolean = false;


  employee: Employee[] = [];

  constructor(private _adminService: AdminService, private router: Router) {}

  

  ngOnInit(): void {
    this.viewEmployee();
  }

  viewEmployee() {
    this.viewManagersStatus = true;
    this.anyButtonClicked = true;
    this._adminService.getAllEmployee().subscribe((data) => {
      this.employee = data;
    });
  }

  deleteEmployee(employee: Employee) {
    this._adminService.deleteEmployee(employee.emp_id).subscribe(() => {
      alert('deleted');
      this.viewEmployee();
    });
  }
}
