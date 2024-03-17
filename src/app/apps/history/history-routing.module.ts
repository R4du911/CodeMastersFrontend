import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './component/history.component';
import { AuthorizationGuard } from '../../utils/authorization-guard.service';

const routes: Routes = [
  {
    path: 'history',
    component: HistoryComponent,
    canActivate: [AuthorizationGuard],
  },
  { path: '', component: HistoryComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryRoutingModule {}
