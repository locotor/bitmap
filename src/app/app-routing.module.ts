import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { TeamlessLayoutComponent } from './layout/teamless-layout/teamless-layout.component';
import { AuthenticationRootComponent } from './pages/authentication/authentication-root/authentication-root.component';
import { AuthenticationModule } from './pages/authentication/authentication.module';
import { HomeRootComponent } from './pages/home/home-root/home-root.component';
import { TeamSelectComponent } from './pages/team/team-select/team-select.component';

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
        path: 'home',
        component: HomeRootComponent
      },
      {
        path: 'team/:id',
        loadChildren: () => import('./pages/team/team.module').then(m => m.TeamModule),
        data: { preload: true }
      },
      {
        path: 'project/:id',
        loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule),
      }
    ]
  }
  // Todo add 404 page
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthenticationModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
