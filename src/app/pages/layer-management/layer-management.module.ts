import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayerManagementRoutingModule } from './layer-management-routing.module';
import { LayerPreviewComponent } from './layer-preview/layer-preview.component';


@NgModule({
  declarations: [LayerPreviewComponent],
  imports: [
    CommonModule,
    LayerManagementRoutingModule
  ]
})
export class LayerManagementModule { }
