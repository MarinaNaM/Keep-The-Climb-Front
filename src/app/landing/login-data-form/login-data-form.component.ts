import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iUserState } from 'src/app/core/models/user-model';
import { ApiUsersService } from 'src/app/core/services/api-users-service';
import { loadUser } from 'src/app/store/actions/user-actions';

@Component({
  selector: 'app-login-data-form',
  templateUrl: './login-data-form.component.html',
  styleUrls: ['./login-data-form.component.scss'],
})
export class LoginDataFormComponent implements OnInit {
  userData!: { email: string; psw: string };
  loginError!: boolean;
  constructor(
    public store: Store<{ user: iUserState }>,
    public userApi: ApiUsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userData = { email: '', psw: '' };
    this.loginError = false;
    //esto a la page:
    // this.store
    //   .select((state) => state.user)
    //   .subscribe({
    //     next: (data) => {
    //       if (data.token) {
    //         this.router.navigate(['home']);
    //       }
    //     },
    //   });
  }

  handleClick() {
    if (this.userData.email && this.userData.psw) {
      this.userApi.loginUser(this.userData.email, this.userData.psw).subscribe({
        next: (data) => {
          if (data.token) {
            this.store.dispatch(
              loadUser({ user: data.user, token: data.token })
            );
            this.router.navigate(['home']);
          }
        },
        error: (err) => {
          this.loginError = true;
        },
      });
    }
  }
}
