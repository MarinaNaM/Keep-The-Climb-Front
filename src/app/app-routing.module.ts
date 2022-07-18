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
  {
    path: 'enchain',
    loadChildren: () =>
      import('../app/enchains/enchains.module').then((m) => m.EnchainsModule),
  },
  {
    path: 'project',
    loadChildren: () =>
      import('../app/projects/projects.module').then((m) => m.ProjectsModule),
  },
  {
    path: 'voteRoute/:id',
    loadChildren: () =>
      import('../app/vote/vote.module').then((m) => m.VoteModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('../app/profile/profile.module').then((m) => m.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
