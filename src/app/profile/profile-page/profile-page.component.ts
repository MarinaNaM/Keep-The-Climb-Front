import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { iUserState } from 'src/app/core/models/user-model';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  user!: iUserState;
  constructor(public store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.user)
      .subscribe({
        next: (data) => {
          this.user = data;
        },
      });
  }
}
