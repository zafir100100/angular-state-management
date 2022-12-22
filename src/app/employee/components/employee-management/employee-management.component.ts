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

  step: number = 1;

  public step1: FormGroup = this.fb.group({
    firstName: [null, [Validators.required, Validators.maxLength(20)]],
    lastName: [null, [Validators.required, Validators.maxLength(20)]],
    dob: [null, [Validators.required, Validators.maxLength(10)]],
    phone: [null, [Validators.required, Validators.maxLength(11)]],
    gender: [null, [Validators.required, Validators.maxLength(6)]],
  });
  public step2: FormGroup = this.fb.group({
    skillName: [null, [Validators.required, Validators.maxLength(50)]],
    experience: [null, [Validators.required, Validators.max(60)]],
    skillLevel: [null, [Validators.required, Validators.maxLength(12)]],
  });
  public step3: any = null;

  ngOnInit(): void {
  }

  public step1Next(): void {
    this.step = 2;
  }

  public step2Next(): void {
    this.step3 = {
      ...this.step1.value,
      ...this.step2.value,
    };
    console.log(this.step3);
    this.step = 3;
  }

  public step3Next(): void {
    console.log(this.step3);
  }
}
