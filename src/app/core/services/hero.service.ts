import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';
import { Hero } from '../models/hero.model';
import { MessageService } from './message.service';
import { HEROES } from './mock-heros';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
 // private heroesUrl = `${environment.baseUrl}/heroes`

  constructor(
   // private http: HttpClient,
    private MessageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.MessageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const hero = HEROES.find((hero) => hero.id === id)!;
    this.MessageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  // PUT /heroes/(anyid)
  update(hero: Hero): Observable<Hero> {
    return this.getHero<Hero>(`${this.getHero}/${hero.id}`, hero)
    //  return this.http.put<Hero>(`${this.heroesUrl}/${hero.id}`, hero)
  }
}
