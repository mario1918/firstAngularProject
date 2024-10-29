import { Component } from '@angular/core';
import { ChartsComponent } from './charts/charts.component';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-chart-container',
  standalone: true,
  imports: [ChartsComponent],
  templateUrl: './chart-container.component.html',
  styleUrl: './chart-container.component.css'
})
export class ChartContainerComponent {
  chartType: ChartType = 'bar';
  labels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  data: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

 


  changeType(chartTypeString: string){
    if(chartTypeString == 'bar'){
      this.chartType = 'bar';
    }else if (chartTypeString == 'line'){
      this.chartType = 'line';
    }else if(chartTypeString == 'doughnut') {
      this.chartType = 'doughnut';
    }else if(chartTypeString == 'radar') {
      this.chartType = 'radar'
    }else if(chartTypeString == 'pie') {
      this.chartType = 'pie'
    }
  }

}
