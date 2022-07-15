import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectorPageComponent } from './sector-page/sector-page.component';

const routes: Routes = [{ path: '', component: SectorPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectorRoutingModule {}
