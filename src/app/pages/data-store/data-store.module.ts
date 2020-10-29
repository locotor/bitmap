import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './data-store-routing.module';
import { DataStoreComponent } from './data-store.component';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  declarations: [DataStoreComponent],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    SharedModule
  ]
})
export class DataStoreModule { }
