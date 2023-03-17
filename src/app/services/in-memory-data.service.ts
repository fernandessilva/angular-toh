import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../core/models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', description: '' },
      { id: 13, name: 'Bombasto', description: '' },
      { id: 14, name: 'Celeritas', description: '' },
      { id: 15, name: 'Magneta', description: '' },
      { id: 16, name: 'RubberMan', description: '' },
      { id: 17, name: 'Dynama', description: '' },
      { id: 18, name: 'Dr. IQ', description: '' },
      { id: 19, name: 'Magma', description: '' },
      { id: 20, name: 'Tornado', description: '' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
