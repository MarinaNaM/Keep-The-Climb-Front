import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iUserState } from '../core/models/user-model';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  token!: string;
  constructor(public router: Router, public store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.user)
      .subscribe({
        next: (data) => (this.token = data.token),
      });
  }

  goHome() {
    this.router.navigate(['home']);
  }

  goProfile() {
    if (this.token) {
      this.router.navigate(['profile']);
    } else {
      this.router.navigate(['signIn']);
    }
  }

  goEnchain() {
    if (this.token) {
      this.router.navigate(['enchain']);
    } else {
      this.router.navigate(['signIn']);
    }
  }

  goProject() {
    if (this.token) {
      this.router.navigate(['project']);
    } else {
      this.router.navigate(['signIn']);
    }
  }
}
