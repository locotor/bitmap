import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team.component';
import { TeamHomeComponent } from './team-home/team-home.component';
import { TeamProjectsComponent } from './team-projects/team-projects.component';


const routes: Routes = [
  {
    path: '',
    component: TeamComponent,
    children: [
      {
        path: 'home',
        component: TeamHomeComponent
      },
      {
        path: 'project',
        component: TeamProjectsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
