import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { EventsModel } from './eventsModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class EventsListComponent {
  url:string = 'https://jsonplaceholder.typicode.com/posts';

  http= inject(HttpClient);

  events:EventsModel[] = [];


  getData() {
    this.http.get<EventsModel[]>(this.url).subscribe(data=> {
      this.events = data;
    })
  }
}
