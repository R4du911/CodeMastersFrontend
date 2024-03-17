import { Component } from '@angular/core';
import { MapService } from '../map/services/map.service';
import { EventService } from '../../../core/layout/event_service/event.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { ModalInfoDeskComponent } from '../modal-info-desk/modal-info-desk.component';

@Component({
  selector: 'app-top-component',
  templateUrl: './top-component.component.html',
  styleUrl: './top-component.component.css'
})
export class TopComponentComponent {
  desks: { [key: string]: any } = {
    '4': [4.1, 4.2, 4.3, 4.4], '5': [5.1, 5.2, 5.3, 5.4], '6': [6.1, 6.2, 6.3, 6.4],
    '7': [7.1, 7.2, 7.3, 7.4], '8': [8.1, 8.2, 8.3, 8.4], '9': [9.1, 9.2, 9.3, 9.4],
    '10': [10.1, 10.2, 10.3, 10.4], '11': [11.1, 11.2, 11.3, 11.4], '12': [12.1, 12.2, 12.3, 12.4],
    '13': [13.1, 13.2, 13.3, 13.4], '14': [14.1, 14.2, 14.3, 14.4] }
  rooms: string[] = ['Pit-Lane', 'Dry-Lane', 'JokerLap' ]
  private dialogOpen = false;

  desk_availability: { [key: string]: any } = {}

  constructor(private mapService: MapService, private eventService: EventService, private dialog: MatDialog) { }

  ngOnInit() {

    this.eventService.selectedDate$.subscribe(selectedDate => {
      const request: any = { start_date: selectedDate, end_date: selectedDate };
      console.log(request);
      for (let key of Object.keys(this.desks)) {
        for (let value of this.desks[key]) {
          this.mapService.getDeskAvailability(value, request).subscribe(response => {
            this.desk_availability[value] = response;
          });
        }
      }

      for (let room of this.rooms) {
        this.mapService.getDeskAvailability(room, request).subscribe(response => {
          this.desk_availability[room] = response;
        });

      }
    });

  }

  openModal(value: string, isRoom: boolean): Observable<boolean | undefined> {
    if (this.dialogOpen) {
      return of();
    }

    const dialogRef: MatDialogRef<ModalInfoDeskComponent, boolean> =
      this.dialog.open(ModalInfoDeskComponent, {
        width: '32rem',
        disableClose: true,
        autoFocus: false,
        hasBackdrop: true,
        data: { id: value, isRoom: isRoom }, // Pass the data as an object with the key 'id'
      });

    dialogRef.afterOpened().subscribe(() => {
      this.dialogOpen = true;
    });

    dialogRef.afterClosed().subscribe(() => {
      this.dialogOpen = false;
    });

    return dialogRef.afterClosed();
  }
}
