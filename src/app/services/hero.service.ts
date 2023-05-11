/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero, HeroPagination } from '../core/models/hero.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'https://rdo-hmg.norteenergiasa.com.br:8002/api/Heroes';

  constructor(private http: HttpClient) {}

  getHeroes(
    pageIndex: number,
    pageSize: number,
    filterName?: string
  ): Observable<HeroPagination> {
    let url = `${this.heroesUrl}?Limit=${pageSize}&page=${pageIndex}`;

    if (filterName) {
      url += `&Name=${filterName}`;
    }
    return this.http.get<HeroPagination>(url);
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}/hero`;

    return this.http.get<Hero>(url);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero);
  }

  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}/Hero`;

    return this.http.delete<Hero>(url);
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero);
  }
  get(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  save(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
