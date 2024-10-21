import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'] 
})
export class ControlsComponent {
  count = 0;
  macro:boolean = false;

  increamentCount(){
    this.count++;
  }
}
