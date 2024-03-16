import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterRequest } from './model/register-request';
import { RegisterService } from './service/register.service';
import * as CryptoJS from 'crypto-js';
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { AuthorizationService } from '../../core/authorization/service/authorization.service';
import { ERole } from '../../core/authorization/model/erole';
import { Subject, takeUntil } from 'rxjs';
import { ERoleMapping } from '../../core/authorization/model/erole-mapping';
import { CustomErrorResponse } from '../../utils/error-handling/model/custom-error-response';
import { ErrorHandlingService } from '../../utils/error-handling/service/error-handling.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnDestroy {
  public username!: string;
  public password!: string;
  public email!: string;
  public registrationSuccess = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  succesMessage = '';
  registerForm: FormGroup = new FormGroup({});
  private key: string = '1234567890123456';
  private _componentDestroy$ = new Subject<void>();
  protected readonly ERoleMapping = ERoleMapping;
  protected roleList: ERole[] = [ERole.Administrator, ERole.Employee];

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private registerService: RegisterService,
    private authenticationService: AuthenticationService,
    private authorizationService: AuthorizationService,
    private handleErrorService: ErrorHandlingService
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  ngOnDestroy(): void {
    this._componentDestroy$.next();
    this._componentDestroy$.complete();
  }

  closeModal(): void {
    this.dialog.closeAll();
  }

  public onSubmit(): void {
    const firstname = this.registerForm.get('firstname')?.value;
    const lastname = this.registerForm.get('lastname')?.value;
    const username = this.registerForm.get('username')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    const role = this.registerForm.get('role')?.value;

    const encryptedPassword = this.encrypt(this.key, password);

    const registerRequest: RegisterRequest = new RegisterRequest(
      firstname,
      lastname,
      username,
      email,
      encryptedPassword,
      role
    );
    this.registerService
      .register(registerRequest)
      .pipe(takeUntil(this._componentDestroy$))
      .subscribe(
        (loginResponse: any) => {
          sessionStorage.setItem('token', loginResponse.accessToken);

          this.authenticationService.firstLogin = loginResponse.firstLogin;
          this.authenticationService.setCurrentUser(
            this.authenticationService.getLoggedInUsername()
          );

          if (this.authenticationService.firstLogin) {
            const userRole: ERole[] = this.authorizationService.getUserRoles();
          } else {
            this.router.navigateByUrl('/app/home');
          }
          this.handleErrorService.handleSuccess(
            'Successfully registered employee'
          );
          this.dialog.closeAll();
        },
        (error: CustomErrorResponse) => {
          this.handleErrorService.handleError(error);
        }
      );
  }

  compareObjects(o1: ERole, o2: ERole): boolean {
    return o1 === o2;
  }

  private initializeForm(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    });
  }

  encrypt(key: any, value: string) {
    key = CryptoJS.enc.Utf8.parse(key);
    return CryptoJS.AES.encrypt(value, key, { iv: key }).toString();
  }

  getErrorMessageRole() {
    if (this.registerForm.get('role')!.hasError('required')) {
      return 'Role is required';
    }

    return '';
  }
}
