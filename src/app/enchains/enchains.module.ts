import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnchainsRoutingModule } from './enchains-routing.module';
import { EnchainPageComponent } from './enchain-page/enchain-page.component';
import { EnchainsListComponent } from './enchains-list/enchains-list.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [EnchainPageComponent, EnchainsListComponent],
  imports: [CommonModule, EnchainsRoutingModule, NavbarModule],
})
export class EnchainsModule {}
