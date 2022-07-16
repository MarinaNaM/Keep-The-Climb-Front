import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { RouteCardComponent } from './route-card/route-card.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [ProjectsPageComponent, RouteCardComponent],
  imports: [CommonModule, ProjectsRoutingModule, NavbarModule],
})
export class ProjectsModule {}
