import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  data:any;
  constructor(private http:HttpClient) { }

  addEmployeeData(data:any) {
    //console.dir('Data:', data);
    return this.http.post<any>("http://localhost:3000/api/addemployee", data);
  }

  editEmployeeData(updated:any,id:any) {
    //console.dir('Data:', updated);
    return this.http.put(`http://localhost:3000/api/editemployee/${id}`, updated);
  }

  fetchData(){
    //console.log('Sending request')
    return this.http.get('http://localhost:3000/api/fetchdata');
  }

  getDetails(id:any){
    return this.http.get(`http://localhost:3000/api/userform/${id}`); 
  }

  delete(id:any){
    return this.http.delete(`http://localhost:3000/api/deleteform/${id}`);
  }
  
}
