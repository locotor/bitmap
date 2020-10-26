import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { TeamlessLayoutComponent } from '../layout/teamless-layout/teamless-layout.component';
import { AuthenticationRootComponent } from '../pages/authentication/authentication-root/authentication-root.component';
import { AuthenticationModule } from '../pages/authentication/authentication.module';
import { TeamSelectComponent } from '../pages/team/team-select/team-select.component';
import { TeamModule } from '../pages/team/team.module';

const routes: Routes = [
  {
    path: '',
    component: TeamlessLayoutComponent,
    children: [
      { path: 'authentication', component: AuthenticationRootComponent },
      { path: 'team-select', component: TeamSelectComponent },
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    // canActivate: [AuthGuardService],
    children: [
      {
        path: 'team/:teamId',
        loadChildren: '../pages/team/team.module#TeamModule'
      },
      {
        path: 'project/:id',
        loadChildren: () => import('../pages/project/project.module').then(m => m.ProjectModule),
      }
    ]
  }
  // Todo add 404 page
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TeamModule,
    AuthenticationModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
