import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private regEmployeeUrl: string = 'http://localhost:8080/employee/add';

  private regEmployeecheckinUrl: string = 'http://localhost:8080/attendance/add';

  constructor(private _httpClient: HttpClient) {}

  registerEmployee(value: any) {
    return this._httpClient.post<Employee>(this.regEmployeeUrl, value);
  }

  registercheckin(value:any){
    return this._httpClient.post<Employee>(this.regEmployeecheckinUrl, value);
  }
}