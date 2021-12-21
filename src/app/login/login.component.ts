import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public _AuthService:AuthService , public _Router:Router) { }

err = ""


  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required]),
  })
  pressLogin(LoginData:any){
    this._AuthService.login(LoginData.value).subscribe((res)=>{
      this.checkIfSuccess(res)
    })
    
    
  }

  checkIfSuccess(res:any){

    if(res.msg === "success"){
      this._Router.navigate(["charts"]);
      localStorage.setItem('token',res.token);
    }else{
      this.err = res.msg
    }

  }

  ngOnInit(): void {
  }

}
