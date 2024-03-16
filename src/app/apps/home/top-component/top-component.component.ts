import { Component } from '@angular/core';

@Component({
  selector: 'app-top-component',
  templateUrl: './top-component.component.html',
  styleUrl: './top-component.component.css'
})
export class TopComponentComponent {
  desks = { '1': [[1.1, 2], [1.2, 0], [1.3, 1], [1.4, 2]], '2': [[2.1, 0], [2.2, 1], [2.3, 1], [2.4, 0]] }
  rooms: { [key: string]: any } = { 'Pit-Lane': [0], 'Dry-Lane': [1], 'Joker Lap': [2] }

  getRoomKeys() {
    return Object.keys(this.rooms);
  }

}
