import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { gradeValues, valueToGrade } from 'src/app/core/helper/gradeValues';
import { iRoute } from 'src/app/core/models/route-model';
import { iUserState } from 'src/app/core/models/user-model';
import { ApiRoutesService } from 'src/app/core/services/api-routes-service';
import { AppState } from 'src/app/store/app.state';
import * as RouteActions from '../../store/actions/route-actions';
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
    public routeTo: Router
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
              this.store.dispatch(
                RouteActions.updateRoute({
                  id: this.route._id as string,
                  data: this.route,
                })
              );
            },
          });
      }
    } else {
      this.routeTo.navigate(['login']);
    }
  }
}
