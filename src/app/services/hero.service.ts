/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero, HeroPagination } from '../core/models/hero.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // private heroesUrl = 'https://rdo-hmg.norteenergiasa.com.br:8002/api/heroes';

  constructor(private http: HttpClient) {}

  getHeroes(pageIndex: number, pageSize: number): Observable<HeroPagination> {
  const url = `https://rdo-hmg.norteenergiasa.com.br:8002/api/Heroes?Limit=${pageSize}&page=${pageIndex}`;
  return this.http.get<HeroPagination>(url);
}

  getHero(id: number): Observable<Hero> {
    const url = `${'https://rdo-hmg.norteenergiasa.com.br:8002/api/Heroes'}/${id}/hero`;

    return this.http.get<Hero>(url);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(
      'https://rdo-hmg.norteenergiasa.com.br:8002/api/Heroes',
      hero
    );
  }

  deleteHero(id: number): Observable<Hero> {
    const url = `${'https://rdo-hmg.norteenergiasa.com.br:8002/api/Heroes'}/${id}/Hero`;

    return this.http.delete<Hero>(url);
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(
      'https://rdo-hmg.norteenergiasa.com.br:8002/api/Heroes',
      hero
    );
  }
}
