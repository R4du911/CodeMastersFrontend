import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  url: string = 'http://localhost:8080/desk/desks';

  constructor(
    private http: HttpClient
  ) { }

  getLeftDesks() {
    return this.http.get(`${this.url}/left`).pipe(map((response:any) => console.log(response)));

  }
}
