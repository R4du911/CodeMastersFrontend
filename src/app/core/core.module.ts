import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';
import {HasRolesDirective} from "./authorization/directive/has-roles.directive";


@NgModule({
  declarations: [LayoutComponent],
    imports: [
        CommonModule,
        CoreRoutingModule,
        HasRolesDirective
    ]
})
export class CoreModule { }
