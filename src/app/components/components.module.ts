import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapViewComponent } from './map-view/map-view.component';
import {AgmCoreModule} from '@agm/core';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';
import {PipesModule} from '../pipes/pipes.module';
import { InfoCardComponent } from './info-card/info-card.component';

@NgModule({
  declarations: [
    MapViewComponent,
    InfoCardComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule,
    AgmSnazzyInfoWindowModule,
    PipesModule,
  ],
  exports: [
    MapViewComponent,
    InfoCardComponent,
  ]
})
export class ComponentsModule { }
