import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit , DoCheck {

  isLogged = false;

  constructor(public _AuthService:AuthService) { }

  logOut(){
    this._AuthService.logOut();
    
  }

  ngOnInit(): void {}



  ngDoCheck(): void {
    if(localStorage.getItem('token') != null){
      this.isLogged = true;
      }else{
        this.isLogged= false;
      }
  }

}
