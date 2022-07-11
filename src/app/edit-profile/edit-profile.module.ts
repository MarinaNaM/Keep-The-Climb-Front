import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfilePageComponent } from './edit-profile-page/edit-profile-page.component';
import { UserDataFormComponent } from './user-data-form/user-data-form.component';


@NgModule({
  declarations: [
    EditProfilePageComponent,
    UserDataFormComponent
  ],
  imports: [
    CommonModule,
    EditProfileRoutingModule
  ]
})
export class EditProfileModule { }
