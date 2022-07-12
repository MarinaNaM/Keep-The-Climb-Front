import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiRoutesService } from './core/services/api-routes-service';
import { ApiSchoolsService } from './core/services/api-schools-service';
import { ApiSectorsService } from './core/services/api-sectors-service';
import { ApiUsersService } from './core/services/api-users-service';
import { AppState } from './store/app.state';
import * as schoolsActions from '../app/store/actions/school-actions';

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
    public user: ApiUsersService
  ) {}

  ngOnInit(): void {
    this.schools
      .getSchools()
      .subscribe({
        next: (data) =>
          this.store.dispatch(
            schoolsActions.loadSchoolsList({ schools: data })
          ),
      });
  }
}
