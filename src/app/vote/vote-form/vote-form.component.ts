import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { gradeValues, valueToGrade } from 'src/app/core/helpers/gradeValues';
import { iRoute } from 'src/app/core/models/route-model';
import { iUserState } from 'src/app/core/models/user-model';
import { ApiRoutesService } from 'src/app/core/services/api-routes-service';
import { ApiUsersService } from 'src/app/core/services/api-users-service';
import { AppState } from 'src/app/store/app.state';
import * as RouteActions from '../../store/actions/route-actions';
import * as UserActions from '../../store/actions/user-actions';
@Component({
  selector: 'app-vote-form',
  templateUrl: './vote-form.component.html',
  styleUrls: ['./vote-form.component.scss'],
})
export class VoteFormComponent implements OnInit {
  @Input() route!: iRoute;
  user!: iUserState;
  values = gradeValues;
  newVote!: number;
  convertNumberToGrade = valueToGrade;

  constructor(
    public store: Store<AppState>,
    public routeApi: ApiRoutesService,
    public routeTo: Router,
    public userApi: ApiUsersService
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

  checkVote() {
    const voteUser = this.route.voteGrade.find(
      (item) => item.user === this.user.user._id
    ) as {
      user: string;
      vote: number;
    };
    return voteUser;
  }

  saveVote(vote: number) {
    if (this.user.token) {
      if (!this.checkVote()) {
        this.route = {
          ...this.route,
          voteGrade: [
            ...this.route.voteGrade,
            { user: this.user.user._id as string, vote: vote },
          ],
        };

        this.routeApi
          .voteRoute(
            this.route._id,
            { user: this.user.user._id as string, vote: String(this.newVote) },
            this.user.token
          )
          .subscribe({
            next: (data) => {
              this.userApi.loginUser(undefined, this.user.token).subscribe({
                next: (data) => {
                  this.user = data;
                  this.store.dispatch(UserActions.loadUser(data));
                },
              });
              this.store.dispatch(
                RouteActions.updateRoute({
                  id: this.route._id as string,
                  data: this.route,
                })
              );
            },
          });
        // let updateUser = this.user.user.routes;
        // const newRoutesUser = updateUser.map((item) =>
        //   item.route._id === this.route._id
        //     ? {
        //         route: this.route,
        //         isEnchain: item.isEnchain,
        //         isProject: item.isProject,
        //       }
        //     : item
        // );
        // this.userApi
        //   .updateUser(
        //     this.user.user._id,
        //     { routes: newRoutesUser },
        //     this.user.token
        //   )
        //   .subscribe({
        //     next: (data) => {
        //       this.store.dispatch(
        //         UserActions.loadUser({
        //           user: this.user.user,
        //           token: this.user.token,
        //         })
        // UserActions.updateUser({
        //   data: {
        //     user: { routes: newRoutesUser },
        //   } as Partial<iUserState>,
        // })
        //     );
        //   },
        // });
      }
    } else {
      this.routeTo.navigate(['']);
    }
  }
}
// let updateUser = this.user.user.routes;
// const newRoutesUser = [...updateUser, this.route];

// this.store.dispatch(
//   UserActions.updateUser({
//     data: {
//       user: { routes: newRoutesUser },
//     } as Partial<iUserState>,
//   })
// );
