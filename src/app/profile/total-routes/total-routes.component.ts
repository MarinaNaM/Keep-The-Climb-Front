import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iRoute } from 'src/app/core/models/route-model';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-total-routes',
  templateUrl: './total-routes.component.html',
  styleUrls: ['./total-routes.component.scss'],
})
export class TotalRoutesComponent implements OnInit {
  enchainedRoutes!: Array<{
    route: iRoute;
    isProject: boolean;
    isEnchain: boolean;
  }>;
  constructor(public store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.user)
      .subscribe({
        next: (data) => {
          this.enchainedRoutes = data.user.routes.filter(
            (item) => item.isEnchain === true
          );
        },
      });
  }
}
