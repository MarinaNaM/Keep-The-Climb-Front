import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApproachRoutingModule } from './approach-routing.module';
import { ApproachPageComponent } from './approach-page/approach-page.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    ApproachPageComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    ApproachRoutingModule
  ]
})
export class ApproachModule { }
