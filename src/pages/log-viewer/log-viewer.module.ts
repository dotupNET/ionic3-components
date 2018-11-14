import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogViewerPage } from './log-viewer';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LogViewerPage,
  ],
  imports: [
    IonicPageModule.forChild(LogViewerPage),
    PipesModule,
    ComponentsModule
  ],
})
export class LogViewerPageModule {}
