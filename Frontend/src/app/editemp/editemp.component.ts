import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendApiService } from '../backend-api.service';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent {

  constructor(private api:BackendApiService,private router:Router,private activatedRoute:ActivatedRoute){}

  employee={
    id:'',
    name:'',
    designation:'',
    salary:'',
    location:''
  }

  ngOnInit():void{
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getDetails(id).subscribe((res:any)=>{
      this.employee.id=res.data._id;
      this.employee.name = res.data.name;
      this.employee.designation = res.data.designation;
      this.employee.salary = res.data.salary;
      this.employee.location = res.data.location;
    })
  }


  onSubmit(){

    this.api.editEmployeeData(this.employee,this.employee.id).subscribe(
      (data) => {
        console.log('success');
      }
   );
    this.router.navigate(["/home"])
  }

}
