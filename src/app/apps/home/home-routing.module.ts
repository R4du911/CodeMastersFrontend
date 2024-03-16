import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MapComponent } from './map/components/map.component';
import {AuthorizationGuard} from "../../utils/authorization-guard.service";


const routes: Routes = [
  { path: 'map',
    component: MapComponent,
    canActivate: [AuthorizationGuard]
  },
  { path: '',
    component: HomeComponent,
    canActivate: [AuthorizationGuard]
  },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
