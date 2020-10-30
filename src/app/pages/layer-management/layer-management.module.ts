import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayerManagementRoutingModule } from './layer-management-routing.module';
import { LayerPreviewComponent } from './layer-preview/layer-preview.component';
import { SharedModule } from 'shared/shared.module';


@NgModule({
  declarations: [LayerPreviewComponent],
  imports: [
    CommonModule,
    LayerManagementRoutingModule,
    SharedModule
  ]
})
export class LayerManagementModule { }
