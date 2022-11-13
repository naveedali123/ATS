import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
    providedIn: 'root',
  })
  export class AdminService {
    private getAllEmployeeUrl: string =
      'http://localhost:8080/employee/getAllEmployee';
    private deleteEmployeebyidUrl: string =
      'http://localhost:8080/employee/delete';

      constructor(private _httpClient: HttpClient) {}
  getAllEmployee() {
    return this._httpClient.get<Employee[]>(this.getAllEmployeeUrl);
  }
  deleteEmployee(emp_id: BigInt) {
    return this._httpClient.delete(
      `${this.deleteEmployeebyidUrl}/${emp_id}`,
      {
        responseType: 'text',
      }
    );
  }
  }
  