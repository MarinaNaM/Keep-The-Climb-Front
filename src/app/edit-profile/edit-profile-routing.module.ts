import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfilePageComponent } from './edit-profile-page/edit-profile-page.component';

const routes: Routes = [{ path: '', component: EditProfilePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProfileRoutingModule {}
