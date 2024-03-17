import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private selectedDateSubject = new BehaviorSubject<Date>(new Date());
  selectedDate$: Observable<Date> = this.selectedDateSubject.asObservable();

  constructor() {}

  setSelectedDate(date: Date): void {
    this.selectedDateSubject.next(date);
  }
}
