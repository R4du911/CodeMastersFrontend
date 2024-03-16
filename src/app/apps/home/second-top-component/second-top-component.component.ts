import { Component } from '@angular/core';
import { MapService } from '../map/services/map.service';

@Component({
  selector: 'app-second-top-component',
  templateUrl: './second-top-component.component.html',
  styleUrl: './second-top-component.component.css'
})
export class SecondTopComponentComponent {
  desks: { [key: string]: any } = { '15': [15.1, 15.2, 15.3, 15.4], '16': [16.1, 16.2, 16.3, 16.4] }
  rooms: string[] = [ 'Quick 8']


  desk_availability: { [key: string]: any } = {}

  constructor(private mapService: MapService) { }

  ngOnInit() {
    for (let key of Object.keys(this.desks)) {
      for (let value of this.desks[key]) {
        this.mapService.getDeskAvailability(value, new Date()).subscribe(response => {
          this.desk_availability[value] = response;
        });

      }
    }

    for (let room of this.rooms) {
      this.mapService.getDeskAvailability(room, new Date()).subscribe(response => {
        this.desk_availability[room] = response;
      });
    }

  }

  getRoomKeys() {
    return Object.keys(this.rooms);
  }

}
