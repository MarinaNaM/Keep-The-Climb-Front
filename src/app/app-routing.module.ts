import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'signIn',
    loadChildren: () =>
      import('../app/sign-in/sign-in.module').then((m) => m.SignInModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../app/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'school/:id',
    loadChildren: () =>
      import('../app/school-one/school-one.module').then(
        (m) => m.SchoolOneModule
      ),
  },
  {
    path: 'school/details/:id',
    loadChildren: () =>
      import('../app/school-details/school-details.module').then(
        (m) => m.SchoolDetailsModule
      ),
  },
  {
    path: 'sector/:id',
    loadChildren: () =>
      import('../app/sector/sector.module').then((m) => m.SectorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
