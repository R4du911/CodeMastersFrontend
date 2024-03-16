import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MapService } from '../map/services/map.service';

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
  constructor(
    private dialog: MatDialog,
    private mapService: MapService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    const currentDate = new Date();
    const request: any = { start_date: currentDate, end_date: currentDate };
    this.mapService
      .getAllBookingDesksByDate(this.data.id, request)
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
      return intervalTime === startBookingTime
    });
  }
}
