import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { iRoute } from 'src/app/core/models/route-model';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-route-card',
  templateUrl: './route-card.component.html',
  styleUrls: ['./route-card.component.scss'],
})
export class RouteCardComponent implements OnInit {
  editRoute!: {
    route: iRoute;
    isProject: boolean;
    isEnchain: boolean;
  };

  idRoute!: string;
  constructor(public route: ActivatedRoute, public store: Store<AppState>) {}

  ngOnInit(): void {
    this.idRoute = this.route.snapshot.paramMap.get('id') as string;
    this.store
      .select((state) => state.user)
      .subscribe({
        next: (data) => {
          this.editRoute = data.user.routes
            .filter((item) => item.isEnchain === true)
            .find((item) => item.route._id === this.idRoute) as {
            route: iRoute;
            isProject: boolean;
            isEnchain: boolean;
          };
        },
      });
  }
}
