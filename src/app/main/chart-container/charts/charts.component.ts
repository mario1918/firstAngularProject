
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-charts',
  standalone: true,
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements  OnChanges {
  public chart: any;

  @Input() chartType?: ChartType;
  @Input() labels?: string[];
  @Input() data?: any[];



  public chartTypeInternal?: ChartType = 'line';
  public chartLabels: string[] = [];
  public chartData: any[] = [];

  lineRadioButton: boolean = true;

  ngOnInit() {
    this.createChart();
  }
  
  

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] || changes['labels'] || changes['chartType']) {
      this.chartData = this.data || [];
      this.chartLabels = this.labels|| [];
      this.chartTypeInternal = this.chartType;
      
      if (this.chart) {
        this.chart.destroy(); 

      }
      this.createChart();
      
    }
  }


  createChart() {
    this.chart = new Chart("chartCanvas", {
      type: this.chartTypeInternal,

      data: {
        labels: this.chartLabels,
        datasets: this.chartData

      },
      options: {
        aspectRatio: 2.0

      }
    });
  }
}
