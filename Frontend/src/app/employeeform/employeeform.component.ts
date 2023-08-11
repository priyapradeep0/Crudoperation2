import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendApiService } from '../backend-api.service';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent {

  constructor(private api:BackendApiService,private router:Router){}

  employee={
    name:'',
    designation:'',
    salary:'',
    location:''
  }

  onSubmit(){

    this.api.addEmployeeData(this.employee).subscribe(
      (data) => {
        console.log('success');
      }
    );
    this.router.navigate(["/home"])
  }
}
