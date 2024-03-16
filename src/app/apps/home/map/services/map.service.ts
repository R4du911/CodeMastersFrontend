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

  getDeskAvailability(id:any) {
    return this.http.get(`${this.url}/${id}`).pipe(map((response: any) => {
        return response.available
      }));

  }
}
