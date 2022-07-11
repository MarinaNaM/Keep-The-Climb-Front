import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserDataComponent } from './user-data/user-data.component';
import { TotalRoutesComponent } from './total-routes/total-routes.component';
import { MediaGradesComponent } from './media-grades/media-grades.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { EditButtonComponent } from './edit-button/edit-button.component';


@NgModule({
  declarations: [
    ProfilePageComponent,
    UserDataComponent,
    TotalRoutesComponent,
    MediaGradesComponent,
    LogoutButtonComponent,
    DeleteButtonComponent,
    EditButtonComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
