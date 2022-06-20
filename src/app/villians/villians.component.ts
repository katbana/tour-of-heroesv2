import { Component, OnInit } from '@angular/core';
import { VillianService } from '../villian.service';

import { Villian } from '../Villian';
import { Hero } from '../hero';

@Component({
  selector: 'app-villians',
  templateUrl: './villians.component.html',
  styleUrls: ['./villians.component.css']
})
export class VilliansComponent implements OnInit {

  villians: Villian[] = [];
  hero: Hero | undefined;
  title:string = 'Villians';
  villian: Villian | undefined;
  
  minPower:number = 0;
  constructor(private villianService: VillianService) {   }

  ngOnInit(): void {
    this.getVillians();

  }

  getVillians():void{
    this.villianService.getVillians()
    .subscribe(villians=>this.villians=villians);
  } 

  add(name:string,villianPower:string):void{
    const v_ids = this.villians.map(v=>{ return v.id});
    let index = Math.max(...v_ids);
    const obj1: Villian = {id : index+1,name:name,power:Number(villianPower)};
     console.log(JSON.stringify(obj1));
    this.villianService.addVillian(obj1).subscribe(villian => this.villians.push(villian));
     
  }

  delete(villian:Villian):void{
    this.villians = this.villians.filter(h => h !== villian);
    this.villianService.deleteVillian(villian.id).subscribe();
  }
}
