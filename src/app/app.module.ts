import { ObservableLogWriter } from './../pages/log-viewer/ObservableLogWriter';
import { SharedModule } from './shared.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MODULES, PROVIDERS } from './app.imports';

@NgModule({
  declarations: [
    // App Core
    MyApp,
  ],
  imports: [
    MODULES,
    IonicModule.forRoot(MyApp),
    SharedModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    PROVIDERS, 
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ObservableLogWriter
  ]
})
export class AppModule { }
