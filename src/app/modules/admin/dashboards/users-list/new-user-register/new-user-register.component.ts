import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user-register',
  templateUrl: './new-user-register.component.html',
  styleUrls: ['./new-user-register.component.scss']
})
export class NewUserRegisterComponent implements OnInit {

  constructor(
    private _formBuilder: UntypedFormBuilder,
  ) { }

  formgroup: UntypedFormGroup

  ngOnInit(): void {
    this.formgroup = this._formBuilder.group({
      email: ["", [Validators.required]],
      role: ["", [Validators.required]],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      age: ["", [Validators.required]],
    });
  }

  registerNewUser(): void {
    console.log(this.formgroup);
  }

}
