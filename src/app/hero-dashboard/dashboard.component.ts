import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../core/models/hero.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    const pageIndex = 0;
    const pageSize = 8;
    this.heroService.getHeroes(pageIndex, pageSize)
      .subscribe((heroes) => (this.heroes = heroes.items));
  }
}
