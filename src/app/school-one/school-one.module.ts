import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolOneRoutingModule } from './school-one-routing.module';
import { SchoolPageComponent } from './school-page/school-page.component';
import { SectorsComponent } from './sectors/sectors.component';
import { InfoButtonComponent } from './info-button/info-button.component';
import { NavbarModule } from '../navbar/navbar.module';
import { SectorCardComponent } from './sector-card/sector-card.component';

@NgModule({
  declarations: [SchoolPageComponent, SectorsComponent, InfoButtonComponent, SectorCardComponent],
  imports: [CommonModule, SchoolOneRoutingModule, NavbarModule],
})
export class SchoolOneModule {}
