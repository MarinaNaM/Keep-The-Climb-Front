import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnchainsRoutingModule } from './enchains-routing.module';
import { EnchainPageComponent } from './enchain-page/enchain-page.component';
import { EnchainsListComponent } from './enchains-list/enchains-list.component';
import { NavbarModule } from '../navbar/navbar.module';
import { EditButtonComponent } from './edit-button/edit-button.component';

@NgModule({
  declarations: [EnchainPageComponent, EnchainsListComponent, EditButtonComponent],
  imports: [CommonModule, EnchainsRoutingModule, NavbarModule],
})
export class EnchainsModule {}
