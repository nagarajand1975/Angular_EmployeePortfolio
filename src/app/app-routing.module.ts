import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { EmployeesListComponent } from './components/employee/employees-list/employees-list.component';
import { EmployeesDetailsComponent } from './components/employee/employees-details/employees-details.component';

const routes: Routes = [
{
  path : '',
  component: HomeComponent
},
{
    path: 'employeeslist',
    component: EmployeesListComponent
  }
  ,
  {
    path: 'employeesdetails/:id',
    component: EmployeesDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
