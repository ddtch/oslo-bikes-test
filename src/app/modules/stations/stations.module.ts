import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationsComponent } from './stations.component';
import {RouterModule} from '@angular/router';
import {ComponentsModule} from '../../components/components.module';
import {AgmCoreModule} from '@agm/core';
import {PipesModule} from '../../pipes/pipes.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [StationsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    AgmCoreModule,
    PipesModule,
    ScrollingModule,
    MatTabsModule,

    RouterModule.forChild([
      {
        path: '',
        component: StationsComponent,
      }
    ])
  ],
  providers: []
})
export class StationsModule { }
