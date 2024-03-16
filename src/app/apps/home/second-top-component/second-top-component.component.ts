import { Component } from '@angular/core';

@Component({
  selector: 'app-second-top-component',
  templateUrl: './second-top-component.component.html',
  styleUrl: './second-top-component.component.css'
})
export class SecondTopComponentComponent {
  desks = { '1': [[1.1, 2], [1.2, 0], [1.3, 1], [1.4, 2]], '2': [[2.1, 0], [2.2, 1], [2.3, 1], [2.4, 0]] }
  rooms: { [key: string]: any } = { 'Quick 8': [] }

  getRoomKeys() {
    return Object.keys(this.rooms);
  }

}
