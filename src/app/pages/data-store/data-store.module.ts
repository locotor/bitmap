import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './data-store-routing.module';
import { SharedModule } from 'shared/shared.module';
import { WorkspaceComponent } from './workspace/workspace.component';
import { DataSourceComponent } from './data-source/data-source.component';
import { StylesComponent } from './styles/styles.component';

@NgModule({
  declarations: [WorkspaceComponent, DataSourceComponent, StylesComponent],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    SharedModule
  ]
})
export class DataStoreModule { }
