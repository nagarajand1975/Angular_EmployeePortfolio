import { Component, OnInit } from '@angular/core';
import {EmployeesService} from '../../../shared/employees.service'

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  public images: Object;
  
  constructor(private empService:EmployeesService) {}

  ngOnInit() {
    this.empService.getEmployees().subscribe((data)=>{
      this.images=data;
    })
    console.log(this.images);
  }
}
