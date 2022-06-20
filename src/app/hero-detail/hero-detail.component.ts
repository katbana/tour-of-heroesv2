import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { Villian } from '../Villian';
import { VillianService } from '../villian.service';

import { forkJoin, map,tap, Observable,of } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;
  m_Villians: Villian[] = [];
  villiandID: number =0;
  villian: Villian | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private villianService: VillianService
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.getVillians();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => 
        {
          this.hero = hero;
          this.villianService.getVillian(hero.villianh_id).subscribe(vil=> this.villian=vil)
        });

  }

  getVillians():void{
    this.villianService.getVillians()
    .subscribe(villians=>this.m_Villians=villians);
  } 

  goBack(): void {
    this.location.back();
  }

  Save():void{
      if(this.hero){
        //this.hero.id = 5;
      this.heroService.updateHero(this.hero).subscribe(()=>this.goBack());
      }
  }
}