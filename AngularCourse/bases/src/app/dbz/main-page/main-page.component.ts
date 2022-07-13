import { Component, OnInit } from '@angular/core';
import { DbzService } from '../dbz.service';
import { Personaje } from '../interfaces/Personaje';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  
  nuevo:Personaje={
    nombre:'',
    poder:0
  }

  constructor() { 
  }

  ngOnInit(): void {
  }

 
  
}
