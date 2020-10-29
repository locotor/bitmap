import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataSourceComponent } from './data-source/data-source.component';
import { StylesComponent } from './styles/styles.component';
import { WorkspaceComponent } from './workspace/workspace.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'workspace',
        component: WorkspaceComponent
      },
      {
        path: 'data-source',
        component: DataSourceComponent
      },
      {
        path: 'styles',
        component: StylesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
