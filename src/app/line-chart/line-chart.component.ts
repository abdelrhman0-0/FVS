import { Component, OnInit ,ViewChild} from '@angular/core';
import { ChartsDataService } from '../charts-data.service';
import { ChartConfiguration, ChartData, ChartType ,ChartEvent} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) public chart: BaseChartDirective | undefined;

  deathSemester:any[]=[];
  killed:any[]=[];
  cases:any[]=[];
  death:any[]=[];

  semesterDeath:any[]=[];

  constructor(public _ChartsDataService:ChartsDataService) { }


  public deathChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,130,157,0.3)',
        },
        ticks: {
          color: '#FF829D'
        }
      }
    },

    
  };
  public deathChartType: ChartType = 'line';
  

  public deathChartData: ChartData<'line'> = {
    labels: [ ],
    datasets: [
      {
        data: [],
        label: 'Killed And Disposed Of',
        backgroundColor: 'rgba(65,113,161,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        // pointBackgroundColor: 'rgba(148,159,177,1)',
        // pointBorderColor: '#fff',
        // pointHoverBackgroundColor: '#fff',
        // pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        // fill: 'origin',
      },
      {
        data: [],
        label: 'Cases',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        // pointBackgroundColor: 'rgba(77,83,96,1)',
        // pointBorderColor: '#fff',
        // pointHoverBackgroundColor: '#fff',
        // pointHoverBorderColor: 'rgba(77,83,96,1)',
        // fill: 'origin',
      },
      {
        data: [ ],
        label: 'Death',
        yAxisID: 'y-axis-1',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        
        // pointBackgroundColor: 'rgba(148,159,177,1)',
        // pointBorderColor: '#fff',
        // pointHoverBackgroundColor: '#fff',
        // pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        // fill: 'origin',
      }
      
    ]
  };


  getDeathData(){
    this._ChartsDataService.GetSemesterDeath().subscribe((res)=>{
      this.semesterDeath=res.data
      this.pushDeathDataChart();
      // this.updateChart()
      

     
    })
    
  }

  
pushDeathDataChart(){
  for(let number of this.semesterDeath){
   
 
    this.deathChartData.labels?.push(number.semster)
    this.deathChartData.datasets[0].data.push(number.killedAndDisposedOf)
    this.deathChartData.datasets[1].data.push(number.cases)
    this.deathChartData.datasets[2].data.push(number.death)


  }
  this.chart?.chart?.update()

}


  ngOnInit(): void {

    this.getDeathData();

  }

}
