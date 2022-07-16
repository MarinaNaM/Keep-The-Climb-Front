import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotePageComponent } from './vote-page/vote-page.component';

const routes: Routes = [{ path: '', component: VotePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoteRoutingModule {}
