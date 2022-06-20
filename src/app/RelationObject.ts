import { Hero } from './hero';
import { Villian } from './Villian';

export interface RelationObject{
    id: number
    hero: Hero;
    villian: Villian;
}