import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Admin } from '../models/admin';
import { Router } from '@angular/router';
import { AdminlogService } from '../service/adminlog.service'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin: Admin = new Admin();

  public loginForm!: FormGroup;

  adminLoggedIn!: String;
  constructor(
    private _adminlogService: AdminlogService,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      hremail: [''],
      hrpassword: [''],
    });
  }

  validateAdmin(): any {
    this._adminlogService
      .validateAdmin(this.loginForm.value)
      .subscribe((data) => {
        if (data) {
          this.adminLoggedIn = this.loginForm.value['hremail'];
          this._adminlogService.setAdminLoggedIn(this.adminLoggedIn.toString());

          console.log('admin Exists : reached safely !', this.adminLoggedIn);

          sessionStorage.setItem('loggedUser', JSON.stringify(data));
          this._router.navigateByUrl('landing-page');
        } else {
          console.log('admin does not exists !');
         this._adminlogService.validateAdmin(this.admin).subscribe(() => {
            alert('incorrect Email and Password !');
          });
        }
      });
  }

}
