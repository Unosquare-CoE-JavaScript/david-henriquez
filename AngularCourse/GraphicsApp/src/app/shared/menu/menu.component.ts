import { Component, OnInit } from '@angular/core';


interface Menu{
  nombre: string;
  ruta:string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu:Menu[]=[
    {nombre:'Barras',ruta:'./graficas/barra'},
    {nombre:'Barras Dobles',ruta:'./graficas/doble-barra'},
    {nombre:'Donas',ruta:'./graficas/donut'},
    {nombre:'Donas http',ruta:'./graficas/donut-http'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
