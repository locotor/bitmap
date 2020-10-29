import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { TeamlessLayoutComponent } from './layout/teamless-layout/teamless-layout.component';
import { AuthenticationRootComponent } from './pages/authentication/authentication-root/authentication-root.component';
import { AuthenticationModule } from './pages/authentication/authentication.module';
import { HomeRootComponent } from './pages/home/home-root/home-root.component';
import { PublishRootComponent } from './pages/publish/publish-root/publish-root.component';

const routes: Routes = [
  {
    path: '',
    component: TeamlessLayoutComponent,
    children: [
      { path: 'authentication', component: AuthenticationRootComponent }
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
        path: 'publish',
        component: PublishRootComponent
      },
      { path: 'data-store', loadChildren: () => import('./pages/data-store/data-store.module').then(m => m.DataStoreModule) },
      { path: 'layer-management', loadChildren: () => import('./pages/layer-management/layer-management.module').then(m => m.LayerManagementModule) },
    ]
  },
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
