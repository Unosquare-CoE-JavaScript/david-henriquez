import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  nombre="IronMan";
  edad:number = 26;

  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }

  constructor() { }

  obtenerNombre=():string =>{
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre=():void =>{
    this.nombre = 'Spiderman';
  }

  cambarEdad(){
    this.edad=30;
  }

  ngOnInit(): void {
  }

}
