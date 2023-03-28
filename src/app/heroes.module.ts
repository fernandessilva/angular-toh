import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes-list/heroes.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddFormComponent } from './heroes-form/add-form.component';

@NgModule({
  declarations: [HeroesComponent, HeroDetailComponent, AddFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HeroesRoutingModule,
    FlexLayoutModule,
  ],
})
export class HeroesModule {}
