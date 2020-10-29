import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayerPreviewComponent } from './layer-preview/layer-preview.component';

const routes: Routes = [{
  path: '',
  children: [
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
