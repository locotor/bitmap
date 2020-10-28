import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'shared/shared.module';
import { HomeRootComponent } from './home-root/home-root.component';

@NgModule({
  declarations: [HomeRootComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
