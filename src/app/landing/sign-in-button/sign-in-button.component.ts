import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-button',
  templateUrl: './sign-in-button.component.html',
  styleUrls: ['./sign-in-button.component.scss'],
})
export class SignInButtonComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  goSignIn() {
    this.router.navigate(['signIn']);
  }
}
