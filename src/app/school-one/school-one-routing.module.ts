import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolPageComponent } from './school-page/school-page.component';

const routes: Routes = [{ path: '', component: SchoolPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolOneRoutingModule {}
