import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private _auth:AuthService,private router:Router){}

  user = {
    email:'',
    password:''
  };

  loginuser(){
    this._auth.loginuser(this.user).subscribe((res:any)=>{
      localStorage.setItem('token',res.token);
      this.router.navigate([res.api]);
    })
  }

}
