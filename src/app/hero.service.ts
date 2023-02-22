import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero.model';
import { MessageService } from './message.service';
import { HEROES } from './mock-heros';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private MessageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.MessageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(name: string): Observable<Hero> {
    const hero = HEROES.find((hero) => hero.name === name)!;
    this.MessageService.add(`HeroService: fetched hero id=${name}`);
    return of(hero);
  }
}
