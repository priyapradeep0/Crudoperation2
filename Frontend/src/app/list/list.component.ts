import { Component, OnInit } from '@angular/core';
import { EmployeedataService } from '../employeedata.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(public serve:EmployeedataService){}
  data:any;
  ngOnInit(): void {
    this.serve.fetchData().subscribe((users)=>{
      this.data = users
      console.log(users)
    })
  }
}
