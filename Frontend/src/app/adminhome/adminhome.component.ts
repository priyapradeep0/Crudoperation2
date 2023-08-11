import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../backend-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  constructor(private api:BackendApiService,private router:Router){}
  employees: any[] = [];
  ngOnInit(): void {
    this.api.fetchData().subscribe((res:any)=>{
      this.employees = res.data
    })
  }
  editForm(id:any){
    //console.log(id)
    this.router.navigate(["/edit/"+id]);
  }
  deleteForm(id:any){
      this.api.delete(id).subscribe((res:any)=>{console.log('Success')})
      this.api.fetchData().subscribe((res:any)=>{
      this.employees = res.data
    })
  }
}
