import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  public _url = 'https://employee-directory-services.herokuapp.com/employees';

  constructor(private http:HttpClient) { }

  public getEmployees(){
    
    return this.http.get(this._url);
  }

  public getEmployee(id:any){
    console.log(this._url + "/" + id);
    return this.http.get(this._url + "/" + id);
  }
}
