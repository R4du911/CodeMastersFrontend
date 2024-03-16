import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MapComponent } from './map/components/map.component';


const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
