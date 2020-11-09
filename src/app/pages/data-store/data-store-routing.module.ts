import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StylesComponent } from './styles/styles.component';
import { DataSourceComponent } from './workspace/data-source/data-source.component';
import { WorkspaceComponent } from './workspace/workspace.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'workspaces',
        component: WorkspaceComponent
      },
      {
        path: 'workspaces/:workspaceName/data-source',
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
