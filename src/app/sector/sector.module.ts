import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectorRoutingModule } from './sector-routing.module';
import { SectorPageComponent } from './sector-page/sector-page.component';
import { RoutesListComponent } from './routes-list/routes-list.component';
import { RoutesCardComponent } from './routes-card/routes-card.component';
import { EnchainButtonComponent } from './enchain-button/enchain-button.component';
import { ProjectButtonComponent } from './project-button/project-button.component';
import { VoteButtonComponent } from './vote-button/vote-button.component';
import { ApproachButtonComponent } from './approach-button/approach-button.component';


@NgModule({
  declarations: [
    SectorPageComponent,
    RoutesListComponent,
    RoutesCardComponent,
    EnchainButtonComponent,
    ProjectButtonComponent,
    VoteButtonComponent,
    ApproachButtonComponent
  ],
  imports: [
    CommonModule,
    SectorRoutingModule
  ]
})
export class SectorModule { }
