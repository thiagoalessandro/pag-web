import {UparUpldComponent} from './upar-upld/upar-upld.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../core/guards/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'upld'
  },
  {
    path: 'upld',
    component: UparUpldComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UparRoutingModule {
}
