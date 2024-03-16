import { Component } from '@angular/core';
import { MapService } from '../map/services/map.service';

@Component({
  selector: 'app-top-of-bottom-component',
  templateUrl: './top-of-bottom-component.component.html',
  styleUrl: './top-of-bottom-component.component.css'
})
export class TopOfBottomComponentComponent {
  desks: { [key: string]: any } = {
    '17': [17.1, 17.2, 17.3, 17.4], '20': [20.1, 20.2, 20.3, 20.4], '21': [21.1, 21.2, 21.3, 21.4],
    '22': [22.1, 22.2, 22.3, 22.4], '23': [23.1, 23.2, 23.3, 23.4]  }

  special_desks:{ [key: string]: any } = {
    '18': [18.1, 18.2, 18.3, 18.4, 18.5], '19': [19.1, 19.2, 19.3, 19.4, 19.5, 19.6]
  }


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

    for (let key of Object.keys(this.special_desks)) {
      for (let value of this.desks[key]) {
        this.mapService.getDeskAvailability(value).subscribe(response => {
          this.desk_availability[value] = response;

        });

      }
    }
  }

}
