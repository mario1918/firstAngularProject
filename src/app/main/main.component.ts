import { Component } from '@angular/core';
import { TitleComponent } from './title/title.component';
import { TabsComponent } from "./tabs/tabs.component";
import { ControlsComponent } from "./controls/controls.component";
import { StatisticalChartComponent } from "./statistical-chart/statistical-chart.component";
import { MapComponent } from "./map/map.component";
import { EventsListComponent } from "./events-list/events-list.component";
import { ChartsComponent } from "./charts/charts.component";
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TitleComponent, TabsComponent, ControlsComponent, StatisticalChartComponent, MapComponent, EventsListComponent, ChartsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
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
    }
  }

}
