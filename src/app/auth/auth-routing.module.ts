import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/components/login.component';
import {AuthorizationGuard} from "../utils/authorization-guard.service";
import {ERole} from "../core/authorization/model/erole";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',
    component: LoginComponent,
    canActivate: [AuthorizationGuard]
  },
  { path: 'register',
    component: RegisterComponent,
    canActivate: [AuthorizationGuard],
    data: {roles: [ERole.Administrator]}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
