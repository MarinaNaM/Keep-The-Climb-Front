import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iRoute } from 'src/app/core/models/route-model';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  projectsRoutes!: Array<{
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
          this.projectsRoutes = data.user.routes.filter(
            (item) => item.isProject === true
          );
        },
      });
  }
}
