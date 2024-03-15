import {Component, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import CryptoJS from 'crypto-js';
import {LoginRequest} from "../model/login-request";
import {LoginService} from "../service/login.service";
import {AuthenticationService} from "../../../core/authentication/authentication.service";
import {ErrorHandlingService} from "../../../utils/error-handling/service/error-handling.service";
import {Subject, takeUntil} from "rxjs";
import {LoginResponse} from "../model/login-response";
import {CustomErrorResponse} from "../../../utils/error-handling/model/custom-error-response";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnDestroy{
  public username!: string;
  public password!: string;
  private key: string = '1234567890123456';

  private _componentDestroy$ = new Subject<void>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private authenticationService: AuthenticationService,
    private handleErrorService: ErrorHandlingService,
  ) {}

  ngOnDestroy(): void {
    this._componentDestroy$.next();
    this._componentDestroy$.complete();
  }

  encrypt(key: any, value: string) {
    key = CryptoJS.enc.Utf8.parse(key);
    return CryptoJS.AES.encrypt(value, key, { iv: key }).toString();
  }

  onSubmit() {
    const encryptedPassword = this.encrypt(this.key, this.password);

    const loginRequest = new LoginRequest(this.username, encryptedPassword);
    this.loginService.login(loginRequest)
      .pipe(takeUntil(this._componentDestroy$))
      .subscribe((loginResponse: LoginResponse) => {
          sessionStorage.setItem('token', loginResponse.accessToken);

          this.authenticationService.setCurrentUser(this.authenticationService.getLoggedInUsername());

          this.router.navigateByUrl('/app/home');
          this.handleErrorService.handleSuccess("Successfully logged in");

        },
        (error: CustomErrorResponse) => {
          this.handleErrorService.handleError(error);
        }
      );
  }
}
