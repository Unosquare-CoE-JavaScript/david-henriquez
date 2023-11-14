import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {


  title = 'Contador App';
  counter: number = 0;
  base:number = 5;

  acumular =(valor:number):void => {
    this.counter+=valor
  }

  constructor() { }

  ngOnInit(): void {
  }

}
