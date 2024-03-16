import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';
import {HasRolesDirective} from "./authorization/directive/has-roles.directive";


@NgModule({
  declarations: [LayoutComponent],
    imports: [
        CommonModule,
        CoreRoutingModule,
      HasRolesDirective,
      MatDatepicker,
      MatDatepickerModule,
      MatInputModule,
      MatFormFieldModule,
      MatMomentDateModule
    ]
})
export class CoreModule { }
