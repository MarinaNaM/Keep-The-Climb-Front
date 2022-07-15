import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iRoute } from 'src/app/core/models/route-model';
import * as userActions from '../../store/actions/user-actions';
import { iUser, iUserState } from 'src/app/core/models/user-model';
import { AppState } from 'src/app/store/app.state';
import { ApiUsersService } from 'src/app/core/services/api-users-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enchain-button',
  templateUrl: './enchain-button.component.html',
  styleUrls: ['./enchain-button.component.scss'],
})
export class EnchainButtonComponent implements OnInit {
  @Input() route!: iRoute;
  user!: iUserState;
  constructor(
    public router: Router,
    public store: Store<AppState>,
    public apiUser: ApiUsersService
  ) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.user)
      .subscribe({
        next: (data) => {
          this.user = data;
        },
      });
  }

  handleEnchain() {
    if (this.user.token) {
      let newUserRoutes: {
        route: string;
        isProject: boolean;
        isEnchain: boolean;
      }[];

      if (this.user.user.routes.find((item) => item.route === this.route._id)) {
        newUserRoutes = this.user.user.routes.map((item) =>
          item.route === this.route._id
            ? {
                route: item.route,
                isProject: item.isProject,
                isEnchain: !item.isEnchain,
              }
            : item
        );
      } else {
        newUserRoutes = this.user.user.routes.map((item) => item);
        newUserRoutes.push({
          route: this.route._id as string,
          isEnchain: true,
          isProject: false,
        });
      }
      const updatedUser: Partial<iUser> = {
        routes: newUserRoutes,
      };
      this.apiUser
        .updateUser(this.user.user._id, updatedUser, this.user.token)
        .subscribe({
          next: (data) => {
            this.store.dispatch(
              userActions.updateUser({ data: { user: data } })
            );
          },
        });
    } else {
      this.router.navigate(['signIn']);
    }
  }
}
