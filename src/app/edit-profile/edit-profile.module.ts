import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfilePageComponent } from './edit-profile-page/edit-profile-page.component';
import { UserDataFormComponent } from './user-data-form/user-data-form.component';
import { NavbarModule } from '../navbar/navbar.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditProfilePageComponent, UserDataFormComponent],
  imports: [CommonModule, EditProfileRoutingModule, NavbarModule, FormsModule],
})
export class EditProfileModule {}
