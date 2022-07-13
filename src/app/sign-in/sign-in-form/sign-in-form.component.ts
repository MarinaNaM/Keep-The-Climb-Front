import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iUser } from 'src/app/core/models/user-model';
import { ApiUsersService } from 'src/app/core/services/api-users-service';
import { LocalStorageService } from 'src/app/core/services/local-storage-service';
import { loadUser } from 'src/app/store/actions/user-actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements OnInit {
  registerData!: {
    name: string;
    email: string;
    psw: string;
    rPsw: string;
  };
  passwordLengthError!: boolean;
  passwordError!: boolean;
  emailError!: boolean;
  constructor(
    public userApi: ApiUsersService,
    public store: Store<AppState>,
    public router: Router,
    public localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.registerData = {
      name: '',
      email: '',
      psw: '',
      rPsw: '',
    };
    this.passwordLengthError = false;
    this.passwordError = false;
    this.emailError = false;
  }

  handleSubmit() {
    if (
      this.registerData.name &&
      this.registerData.email &&
      this.registerData.psw &&
      this.registerData.rPsw
    ) {
      if (this.registerData.psw === this.registerData.rPsw) {
        if (this.registerData.psw.length >= 8) {
          this.passwordError = false;
          const newUser: iUser = {
            name: this.registerData.name,
            psw: this.registerData.psw,
            img: '',
            email: this.registerData.email,
            address: {
              community: '',
              province: '',
            },

            routes: [],
          };
          this.userApi.addUser(newUser).subscribe({
            next: (data) => {
              if (data.token) {
                this.store.dispatch(
                  loadUser({ user: data.user, token: data.token })
                );
                this.localStorage.saveToken(data.token);
                this.router.navigate(['home']);
              }
            },
            error: (err) => {
              this.emailError = true;
              this.registerData.email = '';
            },
          });
        } else {
          this.passwordLengthError = true;
        }
      } else {
        this.passwordError = true;
      }
    }
  }
}
