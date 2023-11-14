import { Injectable } from '@angular/core';
import { Personaje } from './interfaces/Personaje';

@Injectable({
  providedIn: 'root'
})
export class DbzService {


  private _personajes :Personaje[]=[
    {nombre:'Goku',poder:100000},
    {nombre:'Vegetas',poder:80000}
  ];

  get personajes():Personaje[] {
    return [...this._personajes];
  }

  constructor() { 
  }

  addPersonaje(personaje:Personaje){
    this._personajes.push(personaje);
  }


}
