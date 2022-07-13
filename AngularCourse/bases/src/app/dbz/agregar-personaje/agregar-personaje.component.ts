import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DbzService } from '../dbz.service';
import { Personaje } from '../interfaces/Personaje';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css'],
})
export class AgregarPersonajeComponent implements OnInit {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  constructor(private dbzService: DbzService) {}

  ngOnInit(): void {}

  add = () => {
    if (this.nuevo.nombre.trim().length === 0) return;

    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.addPersonaje(this.nuevo);
    
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  };
}
