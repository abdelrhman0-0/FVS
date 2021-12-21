import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ChartsDataService {

  constructor(public _HttpClient:HttpClient) { }

  GetSemesterNewOutBreaks():Observable<any>{
    return this._HttpClient.get('https://animals.a3rff.com/api/Animals/GetSemsterNewOutbreaks')

  }
  GetSemesterDeath():Observable<any>{
    return this._HttpClient.get('https://animals.a3rff.com/api/Animals/GetSemsterDeathChart')

  }


  GetAnimalsLocation():Observable<any>{
    return this._HttpClient.get('https://animals.a3rff.com/api/Animals/GetAnimalsLocations')

  }
}
