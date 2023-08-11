import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../backend-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  constructor(private api:BackendApiService,private router:Router){}
  employees: any[] = [];
  ngOnInit(): void {
    this.api.fetchData().subscribe((res:any)=>{
      this .employees = res.data
    })
  }
}
