import {OptionsComponent} from './components/options/options.component';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {TabOperationsComponent} from './components/tab-operations/tab-operations.component';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import {DialogConfirmComponent} from './components/dialog-confirm/dialog-confirm.component';
import {NotifyMessageComponent} from './components/notify-message/notify-message.component';
import {MatFileUploadModule} from "angular-material-fileupload";

@NgModule({
  declarations: [
    DialogConfirmComponent,
    NotifyMessageComponent,
    BreadcrumbComponent,
    TabOperationsComponent,
    OptionsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    MatFileUploadModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    CommonModule,
    ReactiveFormsModule,
    BreadcrumbComponent,
    TabOperationsComponent,
    OptionsComponent,
    MatFileUploadModule
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { duration: 2500 } }
  ],
  entryComponents: [DialogConfirmComponent, NotifyMessageComponent]
})
export class SharedModule {}
