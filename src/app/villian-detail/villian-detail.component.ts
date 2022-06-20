import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Villian } from '../Villian';
import { VillianService } from '../villian.service';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { RelationService } from '../relation.service';


@Component({
  selector: 'app-villian-detail',
  templateUrl: './villian-detail.component.html',
  styleUrls: ['./villian-detail.component.css']
})
export class VillianDetailComponent implements OnInit {

  m_villian: Villian | undefined;
  m_heroes: Hero[] = [];
  m_hero:Hero | undefined;
  saveMessage:string="";
  constructor( private activatedRoute: ActivatedRoute,
               private location: Location,
               private VillianService: VillianService,
               private heroService: HeroService,
               private relationService: RelationService) 
               {

                this.getVillian();
                // this.getHeroes();
                }

  ngOnInit(): void {
  }

  getVillian(): void{
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.VillianService.getVillian(id).subscribe(m_v=>
      { 
          this.m_villian = m_v;
      });
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(m_heroes => this.m_heroes = m_heroes);
  }

  goBack():void{
    this.location.back();
  }

  save(name:string,power:string):void{  
    if(this.m_villian){
      this.m_villian.name = name;
      this.m_villian.power = Number(power);
    this.VillianService.update(this.m_villian).subscribe(()=>this.goBack());
    }
  }

}
