import { Injectable } from '@angular/core';
//import httpClient
import { HttpClient } from '@angular/common/http';
import{employee} from  '../emp';
//import RXJS from Observables
import{ Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  private url:string ="/assets/data/empstub.json";

  constructor(private http: HttpClient) { }
  getStudentDetials () :Observable<employee[]>{
    //adding type to the get request (array of IStudent)
        return this.http.get<employee[]>(this.url);
     
      }
}
