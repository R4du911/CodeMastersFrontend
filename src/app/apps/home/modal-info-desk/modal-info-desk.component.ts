import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MapService } from '../map/services/map.service';
import { AuthenticationService } from '../../../core/authentication/authentication.service';
import { CustomErrorResponse } from '../../../utils/error-handling/model/custom-error-response';
import { ErrorHandlingService } from '../../../utils/error-handling/service/error-handling.service';
import { EventService } from '../../../core/layout/event_service/event.service';

@Component({
  selector: 'app-modal-info-desk',
  templateUrl: './modal-info-desk.component.html',
  styleUrl: './modal-info-desk.component.css',
})
export class ModalInfoDeskComponent {
  intervals: string[] = [
    '09:00:00-09:59:59',
    '10:00:00-10:59:59',
    '11:00:00-11:59:59',
    '12:00:00-12:59:59',
    '13:00:00-13:59:59',
    '14:00:00-14:59:59',
    '15:00:00-15:59:59',
    '16:00:00-16:59:59',
    '17:00:00-17:59:59',
  ];
  bookings: any[] = [];
  isRoom: boolean = false;
  id: any;
  participants: any;

  constructor(
    private dialog: MatDialog,
    private mapService: MapService,
    private handleErrorService: ErrorHandlingService,
    private authenticationService: AuthenticationService,
    private eventService: EventService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.participants = 'Insert nr of Participants';
    const currentDate = new Date();
    this.id = this.data.id;
    this.isRoom = this.data.isRoom;
    const request: any = { start_date: currentDate, end_date: currentDate };
    this.mapService
      .getAllBookingDesksByDate(this.id, request)
      .subscribe((bookings) => (this.bookings = bookings));
  }

  closeModal(): void {
    this.dialog.closeAll();
  }

  private formatDate(date: string): string {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = this.padZeroes(dateObj.getMonth() + 1);
    const day = this.padZeroes(dateObj.getDate());
    return `${year}-${month}-${day}`;
  }

  private padZeroes(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  isBookingDisabled(interval: string): boolean {
    const intervalTime = interval.split('-')[0];
    return this.bookings.some((booking) => {
      const startBookingTime = booking.startBookingTime.split('T')[1];
      return intervalTime === startBookingTime;
    });
  }

  capacityLessThanHalf() {
    if (!this.isRoom) {
      return false;
    }
    //this.mapService.getRoomCapacity(this.id).subscribe((response:any) => {
    //  if (this.participants < response/2) {
    //    return true;
    //  }
    //  return false;
    //})
    return true;
  }

  onSubmit(interval: string) {
    this.eventService.selectedDate$.subscribe((date) => {
      const start_date =
        this.formatDate(date.toDateString()) + 'T' + interval.split('-')[0];
      const end_date =
        this.formatDate(date.toDateString()) + 'T' + interval.split('-')[1];

      const request: any = {
        deskId: this.data.id,
        username: this.authenticationService.getLoggedInUsername(),
        start_date: start_date,
        end_date: end_date,
      };

      this.mapService.createBookingDesk(request).subscribe(
        (response: any) => {
          this.closeModal();
          this.handleErrorService.handleSuccess('Created booking desh');
        },
        (error: CustomErrorResponse) => {
          this.handleErrorService.handleError(error);
        }
      );
    });
  }
}
