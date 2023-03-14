import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../core/models/hero.model';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService,
    private route: Router) {}

  addHero(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero)
        this.goBack();
      });
  }

  goBack(): void {
    this.route.navigateByUrl('/');

  }

}
