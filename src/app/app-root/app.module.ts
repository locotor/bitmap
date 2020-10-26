import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DelonMockModule } from '@delon/mock';

import { AppComponent } from './app.component';

import { SharedModule } from 'shared/shared.module';

import { environment } from '@env/environment';
import * as MOCKDATA from '../../../_mock';
import { httpInterceptorProviders } from 'shared/interceptors';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '../layout/layout.module';

const MOCKMODULE = !environment.production ? [DelonMockModule.forRoot({ data: MOCKDATA })] : [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    ...MOCKMODULE
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
