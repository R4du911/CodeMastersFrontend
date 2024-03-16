import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterComponent } from '../../auth/register/register.component';
import { Observable, of } from 'rxjs';
import {AuthenticationService} from "../authentication/authentication.service";
import {ERole} from "../authorization/model/erole";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  private dialogOpen = false;

  constructor(
    private dialog: MatDialog,
    private authenticationService: AuthenticationService
  ) {}

  openModal(): Observable<boolean | undefined> {
    if (this.dialogOpen) {
      return of();
    }

    const dialogRef: MatDialogRef<RegisterComponent, boolean> =
      this.dialog.open(RegisterComponent, {
        width: '32rem',
        disableClose: true,
        autoFocus: false,
        hasBackdrop: true,
      });

    dialogRef.afterOpened().subscribe(() => {
      this.dialogOpen = true;
    });

    dialogRef.afterClosed().subscribe(() => {
      this.dialogOpen = false;
    });

    return dialogRef.afterClosed();
  }

  logout() {
    this.authenticationService.logout();
  }

  protected readonly ERole = ERole;
}
