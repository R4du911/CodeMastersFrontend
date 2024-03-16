import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  url: string = 'http://localhost:8080/booking';

  constructor(
    private http: HttpClient
  ) { }

  getDeskAvailability(id:any, date:any) {
    return this.http.post(`${this.url}/${id}`, { date } ).pipe(map((response: any) => {
      return response;
      }));

  }
}
