import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { Villian } from '../Villian';
import { VillianService } from '../villian.service';

import { Relation } from '../Relation';
import { RelationService } from '../relation.service';
import { forkJoin, map,tap, Observable,of } from 'rxjs';

import { CombinedObjects} from '../CombinedObjects';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  
  
  joinedWithObjectForm$ !: Observable<[Hero[], Villian[]]>;
  heroes: Hero[] = [];
  villians: Villian[] = [];
  relations: Relation[] = [];
  CombinedObjects: CombinedObjects | undefined;
  _hero: Hero | undefined;
  name : string = 'Katleho Maloka the G';

  constructor(private heroService: HeroService,
              private villianService: VillianService,
              private relationService: RelationService) { }

  ngOnInit(): void {
    this.getHeroes();
    this.getTopVillians();
    // this.getRelations();

    
    this.getHeroesVillians();
  }


    getHeroesVillians(): void{
      this.joinedWithObjectForm$ = forkJoin([
          this.heroService.getHeroes().pipe(
            tap(res =>
            {
              this.heroes = res;
            })
          ),
          this.villianService.getVillians().pipe(
            tap(re => 
              {
                this.villians = re.slice(0,4);
              })
          )
      ]);
      this.joinedWithObjectForm$.subscribe(
        data => 
        {
            let heroObject = data[0];
            let villianObject = data[1];
            var merged = heroObject.map(t1 => ({...t1,...villianObject.find(t2=>t2.id===t1.villianh_id)}));
            console.log(merged);
            return merged;
        });

        
        
}

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 5));
  }

  getTopVillians():void{
    this.villianService.getVillians()
    .subscribe(villians=> this.villians = villians.filter(x=>x.power>5).slice(0, 4));
  }

  getRelations(): void{
    this.relationService.getRelations()
      .subscribe(relations => {
        this.relations = relations;      
      });
  }
}