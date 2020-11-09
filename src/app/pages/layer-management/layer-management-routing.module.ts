import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayerManagementComponent } from './layer-management/layer-management.component';
import { LayerPreviewComponent } from './layer-preview/layer-preview.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: LayerManagementComponent,
    },
    {
      path: 'layer-preview',
      component: LayerPreviewComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayerManagementRoutingModule { }
