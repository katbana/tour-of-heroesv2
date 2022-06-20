import { Hero } from './hero';
import { Villian } from './Villian';

export interface Relation{
    id:number;
    hero: Hero;
    villian: Villian;
}