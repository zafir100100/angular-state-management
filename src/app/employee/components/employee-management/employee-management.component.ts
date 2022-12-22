import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent {
  constructor(private fb: FormBuilder, private router: Router) {

  }

  public form: FormGroup = this.fb.group({
    username: ['admin', [Validators.required, Validators.maxLength(10)]],
    password: ['admin', [Validators.required, Validators.maxLength(10)]],
  });

  ngOnInit(): void {
    // this.logOut();
  }
}
