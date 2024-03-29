import { Component } from '@angular/core';
import { MapService } from '../map/services/map.service';
import { EventService } from '../../../core/layout/event_service/event.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { ModalInfoDeskComponent } from '../modal-info-desk/modal-info-desk.component';

@Component({
  selector: 'app-second-top-component',
  templateUrl: './second-top-component.component.html',
  styleUrl: './second-top-component.component.css',
})
export class SecondTopComponentComponent {
  desks: { [key: string]: any } = {
    '15': [15.1, 15.2, 15.3, 15.4],
    '16': [16.1, 16.2, 16.3, 16.4],
  };
  rooms: string[] = ['Quick8'];
  private dialogOpen = false;

  desk_availability: { [key: string]: any } = {};

  constructor(
    private mapService: MapService,
    private eventService: EventService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.eventService.selectedDate$.subscribe((selectedDate) => {
      const request: any = { start_date: selectedDate, end_date: selectedDate };
      console.log(request);
      for (let key of Object.keys(this.desks)) {
        for (let value of this.desks[key]) {
          this.mapService
            .getDeskAvailability(value, request)
            .subscribe((response) => {
              this.desk_availability[value] = response;
            });
        }
      }

      for (let room of this.rooms) {
        this.mapService
          .getDeskAvailability(room, request)
          .subscribe((response) => {
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
