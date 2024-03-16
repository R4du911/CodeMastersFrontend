import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterComponent } from '../../auth/register/register.component';
import { Observable, of } from 'rxjs';
import {AuthenticationService} from "../authentication/authentication.service";
import {ERole} from "../authorization/model/erole";
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { EventService } from './event_service/event.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  private dialogOpen = false;
  public date: any;

  constructor(
    private dialog: MatDialog,
    private authenticationService: AuthenticationService,
    private eventService: EventService
  ) {}

  openModal(): Observable<boolean | undefined> {
    if (this.dialogOpen) {
      return of();
    }

    const dialogRef: MatDialogRef<RegisterComponent, boolean> =
      this.dialog.open(RegisterComponent, {
        width: '32rem',
        disableClose: true,
        autoFocus: false,
        hasBackdrop: true,
      });

    dialogRef.afterOpened().subscribe(() => {
      this.dialogOpen = true;
    });

    dialogRef.afterClosed().subscribe(() => {
      this.dialogOpen = false;
    });

    return dialogRef.afterClosed();
  }

  onDateSelected(event: MatDatepickerInputEvent<Date>): void {
    const selectedDate: Date = event.value ?? new Date();
    this.eventService.setSelectedDate(selectedDate);
  }

  logout() {
    this.authenticationService.logout();
  }

  protected readonly ERole = ERole;
}
