import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iUserState } from 'src/app/core/models/user-model';
import { ApiUsersService } from 'src/app/core/services/api-users-service';
import { LocalStorageService } from 'src/app/core/services/local-storage-service';
import { AppState } from 'src/app/store/app.state';
import * as ac from '../../store/actions/user-actions';
@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss'],
})
export class DeleteButtonComponent implements OnInit {
  @Input() user!: iUserState;
  constructor(
    public userApi: ApiUsersService,
    public store: Store<AppState>,
    public localStorage: LocalStorageService,
    public routerTo: Router
  ) {}

  ngOnInit(): void {}

  handleDelete() {
    this.userApi.deleteUser(this.user.token).subscribe({
      next: (data) => {
        this.store.dispatch(ac.logoutUser());
        this.localStorage.clearToken();
        this.routerTo.navigate(['']);
      },
    });
  }
}
