import {APP_INITIALIZER, ApplicationConfig} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideToastr} from "ngx-toastr";
import {Interceptor} from "./utils/http-interceptor";
import {AuthorizationService} from "./core/authorization/authorization.service";
import {AuthenticationService} from "./core/authentication/authentication.service";
import {ERole} from "./core/authorization/model/erole";

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

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide:HTTP_INTERCEPTORS,
      useClass:Interceptor,
      multi:true
    },
    provideToastr(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [AuthorizationService, AuthenticationService],
      multi: true,
    },
  ]
};
