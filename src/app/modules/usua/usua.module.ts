import {SharedModule} from '../../shared/shared.module';
import {NgModule} from '@angular/core';
import {UsuaCadAltComponent} from './usua-cad-alt/usua-cad-alt.component';
import {UsuaRoutingModule} from './usua-routing.module';
import {UsuaListComponent} from './usua-list/usua-list.component';

@NgModule({
  declarations: [UsuaCadAltComponent,
    UsuaListComponent],
  imports: [
    SharedModule,
    UsuaRoutingModule
  ]
})
export class UsuaModule {
}
