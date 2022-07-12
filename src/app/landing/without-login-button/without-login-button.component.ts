import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-without-login-button',
  templateUrl: './without-login-button.component.html',
  styleUrls: ['./without-login-button.component.scss'],
})
export class WithoutLoginButtonComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  goHome() {
    this.router.navigate(['home']);
  }
}
