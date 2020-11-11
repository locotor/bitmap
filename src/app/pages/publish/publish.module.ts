import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublishRootComponent } from './publish-root.component';
import { SharedModule } from 'shared/shared.module';
import { FeatureAttributeFormDialogComponent } from './feature-attribute-form-dialog/feature-attribute-form-dialog.component';


@NgModule({
  declarations: [PublishRootComponent, FeatureAttributeFormDialogComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PublishModule { }
