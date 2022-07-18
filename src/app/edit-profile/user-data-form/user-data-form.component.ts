import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iUser, iUserState } from 'src/app/core/models/user-model';
import { ApiUsersService } from 'src/app/core/services/api-users-service';
import { AppState } from 'src/app/store/app.state';
import { isEmail } from '../../core/helpers/isEmail';
import * as ac from '../../store/actions/user-actions';

@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.scss'],
})
export class UserDataFormComponent implements OnInit {
  user!: iUserState;
  updatedUserData!: {
    name: string;
    email: string;
    img?: string;
    address: {
      community?: string;
      province?: string;
    };
    psw: string;
    rPsw: string;
  };
  errorMessage!: string;

  constructor(public store: Store<AppState>, public apiUser: ApiUsersService) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.user)
      .subscribe({
        next: (data) => {
          this.user = data;
        },
      });
    this.updatedUserData = {
      name: this.user.user.name,
      email: this.user.user.email,
      img: this.user.user.img,
      address: {
        community: this.user.user.address.community,
        province: this.user.user.address.province,
      },
      psw: '',
      rPsw: '',
    };
    this.errorMessage = '';
  }

  handleSubmitUpdate() {
    if (isEmail(this.updatedUserData.email)) {
      if (
        this.updatedUserData.psw === '' ||
        this.updatedUserData.psw.length >= 8
      ) {
        if (this.updatedUserData.psw === this.updatedUserData.rPsw) {
          if (this.updatedUserData.name.length > 0) {
            const updatedUser: Partial<iUser> = {
              name: this.updatedUserData.name,
              email: this.updatedUserData.email,
              img: this.updatedUserData.img
                ? this.updatedUserData.img
                : this.user.user.img,
              address: {
                community: this.updatedUserData.address.community
                  ? this.updatedUserData.address.community
                  : this.user.user.address.community,
                province: this.updatedUserData.address.province
                  ? this.updatedUserData.address.province
                  : this.user.user.address.province,
              },
            };
            if (this.updatedUserData.psw)
              updatedUser.psw = this.updatedUserData.psw;
            this.apiUser
              .updateUser(this.user.user._id, updatedUser, this.user.token)
              .subscribe({
                next: (data) => {
                  if (data._id) {
                    this.store.dispatch(
                      ac.updateUser({
                        data: { user: data, token: this.user.token },
                      })
                    );
                    this.errorMessage = '';
                  }
                },
              });
          } else {
            this.errorMessage = 'Introduzca un nombre';
          }
        } else {
          this.errorMessage = 'Las contraseñas deben ser iguales';
        }
      } else {
        this.errorMessage = 'La contraseña debe tener más de 8 dígitos';
      }
    } else {
      this.errorMessage = 'El email no es válido';
    }
  }
}
