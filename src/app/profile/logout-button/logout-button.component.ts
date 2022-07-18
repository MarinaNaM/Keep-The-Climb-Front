import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iUserState } from 'src/app/core/models/user-model';
import { LocalStorageService } from 'src/app/core/services/local-storage-service';
import { AppState } from 'src/app/store/app.state';
import * as ac from '../../store/actions/user-actions';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss'],
})
export class LogoutButtonComponent implements OnInit {
  @Input() user!: iUserState;
  constructor(
    public store: Store<AppState>,
    public localStorage: LocalStorageService,
    public routerTo: Router
  ) {}

  ngOnInit(): void {}

  handleLogout() {
    this.store.dispatch(ac.logoutUser());
    this.localStorage.clearToken();
    this.routerTo.navigate(['']);
  }
}
