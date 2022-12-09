import { Component } from '@angular/core';
import {Chart,registerables} from 'chart.js';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  public chart: any;
constructor() {
  Chart.register(...registerables);
}
  createChart(){
  
    this.chart = new Chart("PChart", {
      type: 'pie', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'grey'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'skyblue'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
  ngOnInit(): void {
    this.createChart();
  }
}
