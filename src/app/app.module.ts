import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToastrModule} from "ngx-toastr";
import {HttpClientModule} from "@angular/common/http";
import { AuthModule } from "./auth/auth.module";


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
  ]
})
export class AppModule { }
