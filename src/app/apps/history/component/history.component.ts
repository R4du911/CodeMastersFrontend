import {AfterContentInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HistoryService} from "../service/history.service";
import {Observable, Subject} from "rxjs";
import {History} from "../model/history";
import {AuthorizationService} from "../../../core/authorization/service/authorization.service";
import {ERole} from "../../../core/authorization/model/erole";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit, OnDestroy, AfterContentInit{
  historyList$: Observable<History[]> = new Observable<History[]>();
  private _componentDestroy$ = new Subject<void>;
  dataSource = new MatTableDataSource<History>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private historyService: HistoryService,
    private authorizationService : AuthorizationService
  ) {
  }

  ngOnDestroy(): void {
    this._componentDestroy$.next();
    this._componentDestroy$.complete();
  }

  ngOnInit(): void {
    const userRole : ERole[] = this.authorizationService.getUserRoles();
    if(userRole.includes(ERole.Employee)) {
      this.historyService.loadBookingDeskByUserUsername().subscribe()
    }

    if(userRole.includes(ERole.Administrator))
      this.historyService.loadAllBookings().subscribe()

    this.historyList$ = this.historyService.getHistories();
  }

  ngAfterContentInit() {
    this.historyList$.subscribe((histories: History[]) => {
      this.dataSource.data = histories;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }



}
