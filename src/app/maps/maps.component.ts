import { Component, OnInit } from '@angular/core';
import { ChartsDataService } from '../charts-data.service';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})

export class MapsComponent implements OnInit {
  
 
  lat :any;
  lng :any;
  responseData:any[]=[];
  parsedData:any[]=[];
  zoom: number = 14;
  constructor(public _ChartsDataService:ChartsDataService) { }

  getAnimalsLocation(){
    this._ChartsDataService.GetAnimalsLocation().subscribe((res)=>{
      this.responseData = res.data;
      console.log(this.responseData);
      this.lat = Number(this.responseData[0].lat)
      this.lng=Number(this.responseData[0].long)
      this.parsingToNumber()
    })
  }
parsingToNumber(){
  for(let item of this.responseData){
    this.parsedData.push({lat:Number(item.lat),lng:Number(item.long)});

  }
  console.log(this.parsedData);
  
}

  ngOnInit(): void {
    this.getAnimalsLocation()
  }

}
