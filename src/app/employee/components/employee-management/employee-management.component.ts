import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent {
  constructor(private fb: FormBuilder) {

  }

  public form: FormGroup = this.fb.group({
    firstName: [null, [Validators.required, Validators.maxLength(20)]],
    lastName: [null, [Validators.required, Validators.maxLength(20)]],
    dob: [null, [Validators.required, Validators.maxLength(10)]],
    phone: [null, [Validators.required, Validators.maxLength(11)]],
    gender: [null, [Validators.required, Validators.maxLength(6)]],
  });

  ngOnInit(): void {
  }

  public submit(): void {
    console.log(this.form.value);
  }
}
