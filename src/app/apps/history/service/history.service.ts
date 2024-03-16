import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {History} from "../model/history";
import {AuthenticationService} from "../../../core/authentication/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  historyList$: BehaviorSubject<History[]> = new BehaviorSubject<History[]>([]);
  url: string = 'http://localhost:8080/booking';

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) { }

  getHistories() : Observable<History[]> {
    return this.historyList$.asObservable();
  }

  loadAllBookings(): Observable<History[]> {
    return this.http.get<History[]>(this.url)
      .pipe(tap((histories: History[]) => this.historyList$.next(histories)));
  }

  loadBookingDeskByUserUsername(): Observable<History[]> {
    return this.http.get<History[]>(this.url + "/username/" + this.authenticationService.getLoggedInUsername())
      .pipe(tap((histories: History[]) => this.historyList$.next(histories)));
  }

}
