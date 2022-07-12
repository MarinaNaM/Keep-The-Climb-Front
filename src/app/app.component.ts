import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiRoutesService } from './core/services/api-routes-service';
import { ApiSchoolsService } from './core/services/api-schools-service';
import { ApiSectorsService } from './core/services/api-sectors-service';
import { ApiUsersService } from './core/services/api-users-service';
import { AppState } from './store/app.state';
import * as schoolsActions from '../app/store/actions/school-actions';
import * as sectorsActions from '../app/store/actions/sector-actions';
import * as routesActions from '../app/store/actions/route-actions';
import * as userActions from '../app/store/actions/user-actions';
import { LocalStorageService } from './core/services/local-storage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Marina_Navarrete_Front-Final-Project-202205-MAD';

  constructor(
    public store: Store<AppState>,
    public schools: ApiSchoolsService,
    public routes: ApiRoutesService,
    public sectors: ApiSectorsService,
    public user: ApiUsersService,
    public localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.schools.getSchools().subscribe({
      next: (data) =>
        this.store.dispatch(schoolsActions.loadSchoolsList({ schools: data })),
    });
    this.sectors.getSectors().subscribe({
      next: (data) =>
        this.store.dispatch(sectorsActions.loadSectorList({ sectors: data })),
    });
    this.routes.getRoutes().subscribe({
      next: (data) =>
        this.store.dispatch(routesActions.loadRoutesList({ routes: data })),
    });

    const token = this.localStorage.getToken();
    if (token) {
      this.user.loginUser(undefined, token).subscribe({
        next: (data) => {
          if (data.token) {
            this.store.dispatch(
              userActions.loadUser({ user: data.user, token: data.token })
            );
            this.localStorage.saveToken(data.token);
          }
        },
        error: (err) => {},
      });
    }
  }
}
