import { Component, OnInit } from '@angular/core';
import { MapService } from '../map/services/map.service';
import { EventService } from '../../../core/layout/event_service/event.service';
import { Observable, of } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalInfoDeskComponent } from '../modal-info-desk/modal-info-desk.component';

@Component({
  selector: 'app-left-component',
  templateUrl: './left-component.component.html',
  styleUrl: './left-component.component.css'
})
export class LeftComponentComponent implements OnInit {

  desks: {[key:string]:any} = { '1': [1.1, 1.2, 1.3, 1.4], '2': [2.1, 2.2, 2.3, 2.4], '3': [3.1, 3.2, 3.3, 3.4] }


  desk_availability: { [key: string]: any } = {}
  private dialogOpen = false;
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
