import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './heroes-form/add-form.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes-list/heroes.component';

const routes: Routes = [
  { path: '', component: HeroesComponent },
  { path: ':id', component: HeroDetailComponent },
  { path: 'new', component: AddFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
