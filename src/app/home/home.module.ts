import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { MapComponent } from './map/map.component';
import { NavbarModule } from '../navbar/navbar.module';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [HomePageComponent, MapComponent, CarouselComponent],
  imports: [CommonModule, HomeRoutingModule, NavbarModule],
})
export class HomeModule {}
