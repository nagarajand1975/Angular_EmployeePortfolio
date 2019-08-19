import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../../shared/employees.service'

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  public employees: Object;

  constructor(private empService: EmployeesService) { }

  ngOnInit() {
    this.empService.getEmployees().subscribe((data) => {
      this.employees = data;
    })
    console.log(JSON.stringify(this.employees));
  }

}
