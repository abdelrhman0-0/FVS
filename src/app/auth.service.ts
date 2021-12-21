import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // userdata = new BehaviorSubject(null);



  constructor(private _HttpClient:HttpClient) { }

  login(formData:object):Observable<any>{
   return this._HttpClient.post("https://animals.a3rff.com/api/Account/Login",formData);
  }

  logOut(){
    localStorage.removeItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
