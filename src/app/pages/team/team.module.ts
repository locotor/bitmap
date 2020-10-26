import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamComponent } from './team.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeamHomeComponent } from './team-home/team-home.component';
import { TeamSelectComponent } from './team-select/team-select.component';
import { TeamProjectsComponent } from './team-projects/team-projects.component';
import { TeamRoutingModule } from './team-routing.module';

@NgModule({
  declarations: [
    TeamComponent,
    TeamHomeComponent,
    TeamSelectComponent,
    TeamProjectsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }
