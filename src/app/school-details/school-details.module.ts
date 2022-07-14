import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolDetailsRoutingModule } from './school-details-routing.module';
import { DetailsPageComponent } from './details-page/details-page.component';
import { RoutesGradeComponent } from './routes-grade/routes-grade.component';
import { PeriodComponent } from './period/period.component';
import { MapComponent } from './map/map.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [
    DetailsPageComponent,
    RoutesGradeComponent,
    PeriodComponent,
    MapComponent,
    BackButtonComponent,
  ],
  imports: [CommonModule, SchoolDetailsRoutingModule, NavbarModule],
})
export class SchoolDetailsModule {}
