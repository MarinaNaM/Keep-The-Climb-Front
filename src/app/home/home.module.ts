import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SchoolsListComponent } from './schools-list/schools-list.component';
import { SchoolsCardComponent } from './schools-card/schools-card.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SchoolsListComponent,
    SchoolsCardComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
