import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError,find,map,tap } from 'rxjs/operators';

import { Relation } from './Relation';
import { Villian } from './Villian';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class RelationService {

  private relationsURL = 'api/relations';
  private r_hero:Hero | undefined;
  private relation:Relation | undefined;
  relationID: number = 0;

  httpOptions = {
    headers : new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) {
    this.getRelations()
   }

  getRelations():Observable<Relation[]>{
    let response = this.httpClient.get<Relation[]>(this.relationsURL);

    return response;
  }

  updateVillianHero(m_villian:Villian,m_hero:Hero){ //: Observable<Relation>{
     let heroURL = 'api/heroes';
     
     console.log('hero relation' + JSON.stringify(m_hero));
    
     this.httpClient.get<Relation>(this.relationsURL)
        .pipe(
            // find(x=> { 
            //         const xy = x.villian.id == m_villian.id
            //         return xy;
            //       } )
            map(model => {
              const item = model.villian === m_villian;
              console.log(' model.id' +  model.id);
              this.relationID = model.id;
              return model.id;
            })
        );
    
  debugger;
    if(this.r_hero){
    let relation : Relation = { id: this.relationID ,hero: this.r_hero , villian : m_villian };

    debugger;
      this.httpClient.put(this.relationsURL,relation,this.httpOptions);
    }
    debugger;
  }
}
