import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

import { NavbarModule } from '../navbar/navbar.module';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { EnchainButtonComponent } from './enchain-button/enchain-button.component';

@NgModule({
  declarations: [ProjectsPageComponent, ProjectsListComponent, EnchainButtonComponent],
  imports: [CommonModule, ProjectsRoutingModule, NavbarModule],
})
export class ProjectsModule {}
