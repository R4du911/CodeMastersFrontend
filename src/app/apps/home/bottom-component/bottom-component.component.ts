import { Component, OnInit } from '@angular/core';
import { MapService } from '../map/services/map.service';
import { Observable, catchError, map, of, take } from 'rxjs';

@Component({
  selector: 'app-bottom-component',
  templateUrl: './bottom-component.component.html',
  styleUrl: './bottom-component.component.css'
})
export class BottomComponentComponent implements OnInit {
  desks: { [key: string]: any } = {
    '24': [24.1, 24.2, 24.3, 24.4], '25': [25.1, 25.2, 25.3, 25.4], '26': [26.1, 26.2, 26.3, 26.4],
    '27': [27.1, 27.2, 27.3, 27.4], '28': [28.1, 28.2, 28.3, 28.4], '29': [29.1, 29.2, 29.3, 29.4],
    '30': [30.1, 30.2, 30.3, 30.4], '31': [31.1, 31.2, 31.3, 31.4], '32': [32.1, 32.2, 32.3, 32.4],
    '33': [33.1, 33.2, 33.3, 33.4]
  }
  rooms:string[] =['Pole-Position', 'Cockpit' ]

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
    console.log(new Date())
  }


}
