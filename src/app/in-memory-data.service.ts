import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Villian } from './Villian';
import { Relation } from './Relation';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const heroes = [
      { id: 5, h_name: 'Dr. Nice' ,h_power: 10,villianh_id:14 },
      { id: 6, h_name: 'Bombasto',h_power: 4 ,villianh_id:14},
      { id: 7, h_name: 'Celeritas' ,h_power: 7,villianh_id:16},
      { id: 8, h_name: 'Magneta',h_power: 1,villianh_id:16 },
      { id: 9, h_name: 'RubberMan' ,h_power: 3,villianh_id:14},
      { id: 10, h_name: 'Dynama',h_power: 10,villianh_id:16 },
      { id: 11, h_name: 'Dr. IQ',h_power: 2,villianh_id:17 },
      { id: 12, h_name: 'Magma' ,h_power: 4,villianh_id:15},
      { id: 23, h_name: 'Tornadoss',h_power: 7,villianh_id:17 }
    ];

    const villians = [
      {id: 14, name: 'Majin Buu', power: 7},
      {id: 15, name: 'Android 17', power: 9},
      {id: 16, name: 'Android 18', power: 9},
      {id: 17, name: 'Frieza', power: 10}
    ];

    const relations = [
      {id:20, hero:{ id: 5, name: 'Dr. Nice'  ,h_power: 10} , villian: {id: 14, name: 'Majin Buu', power: 7} },
      {id:21, hero: { id: 23, name: 'Tornadoss',h_power: 7  },villian: {id: 16, name: 'Android 18', power: 9}},
      {id:22, hero: { id: 10, name: 'Dynama',h_power: 10 }, villian: {id: 15, name: 'Android 17', power: 9}}
    ];

    return {villians,relations,heroes};
  }

  genHeroesId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  genVillianId(villians: Villian[]):number{
    return villians.length > 0  ? Math.max(...villians.map(villian => villian.id)) + 1 : 10;
  }

  genRelationsId(relations: Relation[]):number{
    return relations.length > 0  ? Math.max(...relations.map(relations => relations.id)) + 1 : 10;
  }

}