import { Component } from '@angular/core';
import { TitleComponent } from './title/title.component';
import { TabsComponent } from "./tabs/tabs.component";
import { ControlsComponent } from "./controls/controls.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TitleComponent, TabsComponent, ControlsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
