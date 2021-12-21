import { Component, OnInit ,ViewChild} from '@angular/core';
import { ChartsDataService } from '../charts-data.service';
import { ChartConfiguration, ChartData, ChartType ,ChartEvent} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';



@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  @ViewChild(BaseChartDirective) public chart: BaseChartDirective | undefined;


  semesterNewOutBreaks:any[]=[];

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    backgroundColor:"#4477AA",
    borderColor:"#4477AA",
    hover:{},
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };
  public barChartType: ChartType = 'bar';
  

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [ ],label:"Number Of Outbreaks"}
      
    ]
  };



  constructor(public _ChartsDataService:ChartsDataService) { }

  getData(){
    this._ChartsDataService.GetSemesterNewOutBreaks().subscribe((res)=>{
      this.semesterNewOutBreaks=res.data
      
    this.pushDataToChart()
    this.updateChart()

    })
  }




pushDataToChart(){
  for(let number of this.semesterNewOutBreaks){
    this.barChartData.labels?.push(number.semster)
    this.barChartData.datasets[0].data.push(number.numberOfOutbreaks)
  }
  
  
}


updateChart(){
  this.chart?.chart?.update();
}

  ngOnInit(): void {
    this.getData();

    
  }

}
