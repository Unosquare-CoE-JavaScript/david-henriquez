import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  ventasNetas:number=7000000.5051;
  porcentaje:number=0.19;

  constructor() { }

  ngOnInit(): void {
  }

}
