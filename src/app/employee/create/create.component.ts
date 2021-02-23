import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormArray, Validators, EmailValidator } from "@angular/forms";
import {NgSelectModule, NgOption} from '@ng-select/ng-select';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  salutation = [
    {id: 1, name: 'Mr'},
    {id: 2, name: 'Mrs'},
    {id: 3, name: 'Mdm'},
 
  ];
  userForm:FormGroup;
  constructor() { this.userForm = new FormGroup({
    'fname' : new FormControl("",Validators.required),
    'mname' : new FormControl(""),
    'lname' : new FormControl(""),
    'email' : new FormControl("Enter E-Mail",[Validators.required,Validators.email]),
    'gender': new FormControl("",Validators.required),
    'mstatus': new FormControl(""),
    'dob' : new FormControl(""),
    'offmail' : new FormControl(""),
    'pmail' : new FormControl(""),
    'nationality' : new FormControl(""),

  }); }

  ngOnInit(): void {
  }

}
