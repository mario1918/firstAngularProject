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
  chartType_P: ChartType = 'line';
  labels_P: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  data_P: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

 


  changeType(chartTypeString: string){
    if(chartTypeString == 'bar'){
      this.chartType_P = 'bar';
    }else if (chartTypeString == 'line'){
      this.chartType_P = 'line';
    }else if(chartTypeString == 'doughnut') {
      this.chartType_P = 'doughnut';
    }else if(chartTypeString == 'radar') {
      this.chartType_P = 'radar'
    }else if(chartTypeString == 'pie') {
      this.chartType_P = 'pie'
    }
  }

}
