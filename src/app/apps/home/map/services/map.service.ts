import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs';
import { CreateBookingDesk, Request } from './request';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  url: string = 'http://localhost:8080/booking';
  url1: string = 'http://localhost:8080/createBooking';
  url2: string = 'http://localhost:8080/desk';


  constructor(private http: HttpClient) { }

  getDeskAvailability(id: any, date: Request) {
    const start_date = this.formatDate(date.start_date) + 'T07:00:00';
    const end_date = this.formatDate(date.end_date) + 'T19:00:00';
    const da = {
      start_date,
      end_date
    };

    return this.http.post<Request>(`${this.url}/${id}`, da).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getAllBookingDesksByDate(id: any, date: Request) {
    const start_date = this.formatDate(date.start_date) + 'T07:00:00';
    const end_date = this.formatDate(date.end_date) + 'T19:00:00';
    const da = {
      start_date,
      end_date
    };

    return this.http.post<Request>(`${this.url}/day/${id}`, da).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  createBookingDesk(createBookingDesk:CreateBookingDesk) {
    const start_date = this.formatDate(createBookingDesk.start_date) + 'T07:00:00';
    const end_date = this.formatDate(createBookingDesk.end_date) + 'T19:00:00';

    return this.http.post<CreateBookingDesk>(`${this.url1}`, createBookingDesk).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  //getRoomCapacity(id: any) {
  //  return this.http.get(`${this.url}/roomCapacity/${id}`).pipe(
  //    map((response: any) => {
  //      return response;
  //    })
  //  );
  //}
  getRoomCapacity(id: any) {
    return this.http.get(`${this.url2}/desks/roomCapacity/${id}`).pipe(
      map((response: any) => {
        console.log(response)
        return response;
      })
    );
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
}
