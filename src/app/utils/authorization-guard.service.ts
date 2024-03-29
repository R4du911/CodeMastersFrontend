import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../core/authentication/authentication.service';
import { AuthorizationService } from '../core/authorization/service/authorization.service';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private authorizationService: AuthorizationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      this.authenticationService.isLoggedIn() &&
      state.url.includes('login')
    ) {
      return this.router.createUrlTree(['app/home']);
    }

    if (this.authenticationService.isLoggedIn() && state.url.includes('home')) {
      return true;
    }

    if (
      !this.authenticationService.isLoggedIn() &&
      state.url.includes('login')
    ) {
      return true;
    }

    if (!this.authenticationService.isLoggedIn()) {
      return this.router.createUrlTree(['auth/login']);
    }

    return this.authorizationService.hasRoles(route.data['roles']);
  }
}
