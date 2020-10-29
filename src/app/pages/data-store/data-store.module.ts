import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './data-store-routing.module';
import { SharedModule } from 'shared/shared.module';
import { WorkspaceComponent } from './workspace/workspace.component';

@NgModule({
  declarations: [WorkspaceComponent],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    SharedModule
  ]
})
export class DataStoreModule { }
