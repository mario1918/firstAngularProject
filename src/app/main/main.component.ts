import { Component } from '@angular/core';
import { TitleComponent } from './title/title.component';
import { TabsComponent } from "./tabs/tabs.component";
import { ControlsComponent } from "./controls/controls.component";
import { StatisticalChartComponent } from "./statistical-chart/statistical-chart.component";
import { MapComponent } from "./map/map.component";
import { EventsListComponent } from "./events-list/events-list.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TitleComponent, TabsComponent, ControlsComponent, StatisticalChartComponent, MapComponent, EventsListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
