import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  url: string = 'http://localhost:8080/booking';

  constructor(
    private http: HttpClient, private datePipe: DatePipe
  ) { }

  getDeskAvailability(id: any, date: any) {
    var start_date = this.datePipe.transform(date, 'YYYY-MM-DD') + ' 07:00:00';
    var end_date = this.datePipe.transform(date, 'YYYY-MM-DD') + ' 19:00:00';
    return this.http.post(`${this.url}/${id}`, { start_date, end_date }).pipe(map((response: any) => {
      return response;
      }));

  }
}
