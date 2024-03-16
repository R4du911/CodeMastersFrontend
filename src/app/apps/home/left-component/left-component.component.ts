import { Component, OnInit } from '@angular/core';
import { MapService } from '../map/services/map.service';

@Component({
  selector: 'app-left-component',
  templateUrl: './left-component.component.html',
  styleUrl: './left-component.component.css'
})
export class LeftComponentComponent implements OnInit {

  desks: {[key:string]:any} = { '1': [1.1, 1.2, 1.3, 1.4], '2': [2.1, 2.2, 2.3, 2.4], '3': [3.1, 3.2, 3.3, 3.4] }


  desk_availability: { [key: string]: any } = {}

  constructor(private mapService: MapService) { }

  ngOnInit() {
    for (let key of Object.keys(this.desks)) {
      for (let value of this.desks[key]) {
        this.mapService.getDeskAvailability(value).subscribe(response => {
          this.desk_availability[value] = response;
        });

      }
    }


  }
}
