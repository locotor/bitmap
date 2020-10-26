import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamlessLayoutComponent } from './teamless-layout/teamless-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  declarations: [
    TeamlessLayoutComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    TeamlessLayoutComponent,
    MainLayoutComponent
  ]
})
export class LayoutModule { }
