import {SharedModule} from '../../shared/shared.module';
import {NgModule} from '@angular/core';
import {UparUpldComponent} from './upar-upld/upar-upld.component';
import {UparRoutingModule} from './upar-routing.module';

@NgModule({
  declarations: [UparUpldComponent],
  imports: [
    SharedModule,
    UparRoutingModule
  ]
})
export class UparModule {
}
