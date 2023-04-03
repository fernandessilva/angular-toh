import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './heroes-form/add-form.component';
import { PageNotFoundComponent } from './core/components/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./hero-dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes.module').then((m) => m.HeroesModule),
  },
  {
    path: 'new',
    component: AddFormComponent,
  },

  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
