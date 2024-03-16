import { Component, OnInit } from '@angular/core';
import { MapService } from '../map/services/map.service';

@Component({
  selector: 'app-left-component',
  templateUrl: './left-component.component.html',
  styleUrl: './left-component.component.css'
})
export class LeftComponentComponent implements OnInit {

  desks: { [key: string]: [] } = {}

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.mapService.getLeftDesks().subscribe();
}

    
}
