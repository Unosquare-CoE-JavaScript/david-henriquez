import { Component, OnInit } from '@angular/core';

enum Color {
  rojo,
  negro,
  azul,
  verde,
}

export interface Heroe {
  nombre: string;
  vuela: boolean;
  color: Color;
}

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css'],
})
export class OrdenarComponent implements OnInit {
  isMayuscular: boolean = true;
  orderBy:string ='';
  
  heroes: Heroe[] = [
    { nombre: 'Superman', vuela: true, color: Color.azul },
    { nombre: 'Batman', vuela: false, color: Color.negro },
    { nombre: 'Robin', vuela: false, color: Color.verde },
    { nombre: 'DeadPool', vuela: false, color: Color.rojo },
    { nombre: 'Linterna Verde', vuela: true, color: Color.verde },
  ];

  constructor() {}

  ngOnInit(): void {}

  CambiarCase() {
    this.isMayuscular = !this.isMayuscular;
  }

  ordernar(valor:string){
    this.orderBy=valor;
  }
}
