import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  // ! or | undefined
  hero!: Hero;
  isEditing!: boolean;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
<<<<<<< HEAD:src/app/hero-detail/hero-detail.component.ts
    const paramid = this.route.snapshot.paramMap.get('id');
    if (paramid === 'new') {
      this.isEditing = false;
      this.hero = { name: '' } as Hero;
    } else {
      this.isEditing = true;
      const id = Number(paramid);

      this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));

    }
  }
  goBack(): void {
    this.location.back();
  }

<<<<<<< HEAD:src/app/hero-detail/hero-detail.component.ts
  update(): void {
    this.heroService.update(this.hero).subscribe((hero) => this.goBack());
  }

  // save(): void {
  //   this.heroService.update(this.hero).subscribe((hero) => this.goBack());
  // }

}
