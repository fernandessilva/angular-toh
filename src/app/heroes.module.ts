import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddFormComponent } from './add-form/add-form.component';





@NgModule({
  declarations: [HeroesComponent, HeroDetailComponent, AddFormComponent ],
  imports: [
    CommonModule, MaterialModule, FormsModule, HeroesRoutingModule, FlexLayoutModule,
  ]
})
export class HeroesModule { }
