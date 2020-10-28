import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DelonMockModule } from '@delon/mock';

import { SharedModule } from 'shared/shared.module';

import { environment } from '@env/environment';
import * as MOCKDATA from '../../_mock';
import { httpInterceptorProviders } from 'shared/interceptors';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { Router } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { AppComponent } from './app-root/app.component';
import { PublishModule } from './pages/publish/publish.module';

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
    ...MOCKMODULE,
    HomeModule,
    PublishModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
