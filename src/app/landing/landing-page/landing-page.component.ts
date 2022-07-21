import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApiUsersService } from 'src/app/core/services/api-users-service';
import { LocalStorageService } from 'src/app/core/services/local-storage-service';
import { loadUser } from 'src/app/store/actions/user-actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(
    public userApi: ApiUsersService,
    public store: Store<AppState>,
    public router: Router,
    public localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    const token = this.localStorage.getToken();
    if (token) {
      this.userApi.loginUser(undefined, token).subscribe({
        next: (data) => {
          if (data.token) {
            this.store.dispatch(
              loadUser({
                user: data.user,
                token: data.token,
              })
            );
            this.localStorage.saveToken(data.token);
            this.router.navigate(['home']);
          }
        },
      });
    }
  }
}
