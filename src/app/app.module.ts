import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToastrModule} from "ngx-toastr";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {Interceptor} from "./utils/http-interceptor";
import {AuthenticationService} from "./core/authentication/authentication.service";
import {AuthorizationService} from "./core/authorization/service/authorization.service";
import {ERole} from "./core/authorization/model/erole";
import {ErrorHandlingService} from "./utils/error-handling/service/error-handling.service";
import {AuthModule} from "./auth/auth.module";


function initializeAppFactory(
  authorizationService: AuthorizationService,
  authenticationService: AuthenticationService
): () => ERole[] {
  return () => {
    return authenticationService.isLoggedIn()
      ? authorizationService.getUserRoles()
      : []
  };
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      maxOpened: 4,
      closeButton: true,
      autoDismiss: true,
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [AuthorizationService, AuthenticationService],
      multi: true,
    },
  ]
})
export class AppModule { }
