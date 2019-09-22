import {UsuaListComponent} from './usua-list/usua-list.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsuaCadAltComponent} from './usua-cad-alt/usua-cad-alt.component';
import {AuthGuard} from '../../core/guards/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cons'
  },
  {
    path: 'cons',
    component: UsuaListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cada',
    component: UsuaCadAltComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit',
    component: UsuaCadAltComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'visu',
    component: UsuaCadAltComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuaRoutingModule {
}
