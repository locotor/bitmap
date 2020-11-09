import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublishRootComponent } from './publish-root.component';
import { SharedModule } from 'shared/shared.module';


@NgModule({
  declarations: [PublishRootComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PublishModule { }
