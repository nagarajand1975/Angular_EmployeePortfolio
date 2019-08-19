import { Component, OnInit } from '@angular/core';
import { EmployeesService } from "../../../shared/employees.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.css']
})
export class EmployeesDetailsComponent implements OnInit {
  
  public _id:any;
  public employee:Object={
    firstName:'',
    lastName:'',
    title:'' 
  };

  constructor(private http: EmployeesService, private route: ActivatedRoute) { 
    this._id = this.route.snapshot.paramMap.get("id");

    this.http.getEmployee(this._id).subscribe((data) => {
      this.employee = data;
    });
  }

  ngOnInit() {
   

  }
  

}
