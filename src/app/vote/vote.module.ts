import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoteRoutingModule } from './vote-routing.module';
import { VotePageComponent } from './vote-page/vote-page.component';
import { VoteFormComponent } from './vote-form/vote-form.component';
import { RouteCardComponent } from './route-card/route-card.component';
import { NavbarModule } from '../navbar/navbar.module';
import { EnchainsModule } from '../enchains/enchains.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VotePageComponent, VoteFormComponent, RouteCardComponent],
  imports: [CommonModule, VoteRoutingModule, NavbarModule, FormsModule],
})
export class VoteModule {}
