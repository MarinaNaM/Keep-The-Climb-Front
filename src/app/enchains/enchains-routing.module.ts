import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnchainPageComponent } from './enchain-page/enchain-page.component';

const routes: Routes = [{ path: '', component: EnchainPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnchainsRoutingModule {}
