import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('../app/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('../app/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'signIn',
    loadChildren: () =>
      import('../app/sign-in/sign-in.module').then((m) => m.SignInModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
