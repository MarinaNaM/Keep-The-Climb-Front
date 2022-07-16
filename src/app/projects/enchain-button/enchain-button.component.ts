import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iRoute } from 'src/app/core/models/route-model';
import { iUser, iUserState } from 'src/app/core/models/user-model';
import { ApiUsersService } from 'src/app/core/services/api-users-service';
import { AppState } from 'src/app/store/app.state';
import * as userActions from '../../store/actions/user-actions';

@Component({
  selector: 'app-enchain-button',
  templateUrl: './enchain-button.component.html',
  styleUrls: ['./enchain-button.component.scss'],
})
export class EnchainButtonComponent implements OnInit {
  @Input() route!: iRoute;
  user!: iUserState;
  // route!: iRoute;

  constructor(
    public store: Store<AppState>,
    public apiUser: ApiUsersService,
    public router: Router
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

  handleEnchainToggle() {
    if (this.user.token) {
      let newUserRoutes: {
        route: iRoute;
        isProject: boolean;
        isEnchain: boolean;
      }[];

      if (
        this.user.user.routes.find((item) => item.route._id === this.route._id)
      ) {
        newUserRoutes = this.user.user.routes.map((item) =>
          item.route._id === this.route._id
            ? {
                route: item.route,
                isProject: !item.isProject,
                isEnchain: !item.isEnchain,
              }
            : item
        );
      } else {
        newUserRoutes = this.user.user.routes.map((item) => item);
        newUserRoutes.push({
          route: this.route,
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

//añadir que si está encadenada se borre de esta lista
