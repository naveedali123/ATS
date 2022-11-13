import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AdminComponent } from './admin/admin.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { DeleteComponent } from './delete/delete.component';
import { EmployeeComponent } from './employee/employee.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'login',component:LoginComponent},
  {path: 'employee',component:EmployeeComponent},
  {path: 'landing-page',component:LandingPageComponent},
  {path: 'add-employee',component:AddEmployeeComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'search',component:SearchComponent},
  {path: 'attendance',component:AttendanceComponent},
  {path:'check-out',component:CheckOutComponent},
  {path:'Delete',component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
