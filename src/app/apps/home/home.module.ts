import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LeftComponentComponent } from './left-component/left-component.component';
import { BottomComponentComponent } from './bottom-component/bottom-component.component';
import { SecondTopComponentComponent } from './second-top-component/second-top-component.component';
import { TopComponentComponent } from './top-component/top-component.component';
import { TopOfBottomComponentComponent } from './top-of-bottom-component/top-of-bottom-component.component';
import { MapComponent } from './map/components/map.component';
import { ModalInfoDeskComponent } from './modal-info-desk/modal-info-desk.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ModalInfoDeskComponent,
    HomeComponent,
    MapComponent,
    LeftComponentComponent,
    BottomComponentComponent,
    SecondTopComponentComponent,
    TopComponentComponent,
    TopOfBottomComponentComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, MatButtonModule, MatIconModule],
  providers: [DatePipe],
})
export class HomeModule {}
