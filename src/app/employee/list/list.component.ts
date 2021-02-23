import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import{EmpServiceService} from '../emp-service.service';
import { employee} from '../../emp';
import  {Router} from '@angular/router';
import {MatSort} from '@angular/material/sort';



export interface PeriodicElement {
  lastName:string;
  firstName:string;
  relationship:string;
  employee:string;
  id:string;
  dob:string;
  email: string;
  status:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  
  {
        lastName:'Last_Name1000',
        firstName:'first_Name1000',
        relationship:'Employee',
        employee:'Last_Name9991',
        id:'ID1001',
        dob:'20/05/1980',
        email: 'test1@abc.com',
        status:'Active',
      },
      {
        lastName:'Last_Name1001',
        firstName:'first_Name1001',
        relationship:'Child',
        employee:'Last_Name9992',
        id:'ID1002',
        dob:'10/03/2001',
        email: 'test2@abc.com',
        status:'Approved',
      },
      {
        lastName:'Last_Name1002',
        firstName:'first_Name1002',
        relationship:'Child',
        employee:'Last_Name9993',
        id:'ID1004',
        dob:'10/03/2001',
        email: 'test3@abc.com',
        status:'Approved',
      },
      {
        lastName:'Last_Name1003',
        firstName:'first_Name1003',
        relationship:'Employee',
        employee:'Last_Name9994',
        id:'ID1004',
        dob:'08/02/2001',
        email: 'test4@abc.com',
        status:'Terminated',
      }
  
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
 //empdataSources: any[];

 //empdataSource:employee[] =[];
 
  // employees: employee[]=[
  //   {
  //     lastName:'Last_Name1000',
  //     firstName:'first_Name1000',
  //     relationship:'Employee',
  //     employee:'Last_Name9991',
  //     id:'ID1001',
  //     dob:new Date('20/03/1986'),
  //     email: 'test1@abc.com',
  //     status:'Active',
  //   },
  //   {
  //     lastName:'Last_Name1001',
  //     firstName:'first_Name1001',
  //     relationship:'Child',
  //     employee:'Last_Name9992',
  //     id:'ID1002',
  //     dob:new Date('10/03/2001'),
  //     email: 'test2@abc.com',
  //     status:'Approved',
  //   }

  // ]

//   constructor(private _EmpServiceService: EmpServiceService) { 

//     const empdataSource: employee[] = [];

//     this.dataSource = new MatTableDataSource(empdataSource);
//   }

//   ngOnInit() {
  
//     //this.studentList = this._StudenServiceService.getStudentDetials();
//     this._EmpServiceService.getStudentDetials()
//     .subscribe(data => this.empdataSources = data);
//   }


//   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//   dataSource: MatTableDataSource<employee>;



//   @ViewChild(MatPaginator) paginator: MatPaginator;

//   ngAfterViewInit() {
//     // this.dataSource.paginator = this.paginator;
//   }
// }

constructor(private router: Router) { }

displayedColumns: string[] = ['lastName', 'firstName', 'relationship', 'employee','id','dob','email','status'];
 dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  onSelect(){
    this.router.navigate(['/create']);

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}



