import { Component, OnInit } from '@angular/core';
import{ pdetails} from '../../models/employee.model'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  pdetail: pdetails[]=[
    {
      lastName:'Last_Name1000',
      firstName:'first_Name1000',
      relationship:'Employee',
      employee:'Last_Name9991',
      id:'ID1001',
      dob:new Date('20/03/1986'),
      email: 'test1@abc.com',
      status:'Active',
    },
    {
      lastName:'Last_Name1001',
      firstName:'first_Name1001',
      relationship:'Child',
      employee:'Last_Name9992',
      id:'ID1002',
      dob:new Date('10/03/2001'),
      email: 'test2@abc.com',
      status:'Approved',
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
