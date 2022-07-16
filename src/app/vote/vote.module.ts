import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoteRoutingModule } from './vote-routing.module';
import { VotePageComponent } from './vote-page/vote-page.component';
import { VoteFormComponent } from './vote-form/vote-form.component';
import { RouteCardComponent } from './route-card/route-card.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [VotePageComponent, VoteFormComponent, RouteCardComponent],
  imports: [CommonModule, VoteRoutingModule, NavbarModule],
})
export class VoteModule {}
