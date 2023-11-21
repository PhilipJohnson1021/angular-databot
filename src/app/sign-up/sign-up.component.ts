import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabotService } from './../core/databot.service';
import { SuperUserRegister } from 'src/models/clientregister.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userForm: FormGroup;
  superUserRegister = {} as SuperUserRegister;

  constructor(private formBuilder: FormBuilder, private databotService: DatabotService) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      adminname: ['', Validators.compose([Validators.required,Validators.minLength(4)])],
      adminrole:['',Validators.compose([Validators.required,Validators.minLength(4)])],
      OfficialEmailID:['',Validators.compose([Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])],
      ContactNo:['',Validators.compose([Validators.required])],
      password:['',Validators.compose([Validators.required,Validators.minLength(4)])],
    });
  }

  onSubmit() {
    this.superUserRegister.role = this.userForm.value.adminrole;
    this.superUserRegister.userName = this.userForm.value.adminname;
    this.superUserRegister.emailId = this.userForm.value.OfficialEmailID;
    this.superUserRegister.password = this.userForm.value.password;
    this.superUserRegister.contactNumber = this.userForm.value.ContactNo;

    console.log(this.superUserRegister);

    this.databotService.superUserRegistration(this.superUserRegister).subscribe(data => {
      console.log(data);
    });
  }

}
