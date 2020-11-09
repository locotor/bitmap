import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './data-store-routing.module';
import { SharedModule } from 'shared/shared.module';
import { WorkspaceComponent } from './workspace/workspace.component';
import { StylesComponent } from './styles/styles.component';
import { WorkspaceFormDialogComponent } from './workspace/dialogs/workspace-form-dialog/workspace-form-dialog.component';
import { DataSourceComponent } from './workspace/data-source/data-source.component';

@NgModule({
  declarations: [
    WorkspaceComponent,
    DataSourceComponent,
    StylesComponent,
    WorkspaceFormDialogComponent
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    SharedModule
  ]
})
export class DataStoreModule { }
