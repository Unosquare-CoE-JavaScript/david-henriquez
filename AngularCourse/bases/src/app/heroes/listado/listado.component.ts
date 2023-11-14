import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor', 'Dr Strange'];
  heroeBorrado: string = '';
  constructor() {}

  ngOnInit(): void {}

  borrarHeroe = () => {
    this.heroeBorrado = this.heroes.shift() || '';
  };
}
