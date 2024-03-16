import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-component',
  templateUrl: './bottom-component.component.html',
  styleUrl: './bottom-component.component.css'
})
export class BottomComponentComponent {
  desks = { '1': [[1.1, 2], [1.2, 0], [1.3, 1], [1.4, 2]], '2': [[2.1, 0], [2.2, 1], [2.3, 1], [2.4, 0]] }
  rooms: {[key:string]:any} = { 'PolePosition': [1], 'Cockpit': [0] }

  getRoomKeys() {
    return Object.keys(this.rooms);
  }

}
