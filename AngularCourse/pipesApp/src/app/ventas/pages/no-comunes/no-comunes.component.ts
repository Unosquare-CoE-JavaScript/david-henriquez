import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  constructor() { }

  nombre:string='David';
  genero:string='masculino';


  invitacionMaps={
    masculino:'invitarlo',
    femenino:'invitarla'
  }


  ///I18N Plural

  clientes:string[]=['Maria','Pedro','David','Andres','Henriquez'];
  clientesMaps={
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other':'tenemos # clientes esperando'

  }


  ///Key Values Pipe
  persona:any={
    nombre:'David',
    edad:35,
    direccion:'Bquilla, Colombia'
  };

  ///JSON PIPE
  heroes:any[]=[
    {nombre:'Superman',vuela:true},
    {nombre:'Robin',vuela:false},
    {nombre:'Batman',vuela:false}
  ]


  //Async PIPE
  miObservable = interval(1000)

  valorPromesa = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('Data Resolved');
      },3000)
  });

  ngOnInit(): void {
  }

  ChangeNombre(){
    if(this.nombre==='David'){
      this.nombre='Valentina';
      this.genero='femenino';
    }
    else{
      this.nombre='David';
      this.genero='masculino';  
    }
  }

  BorrarCliente(){
    this.clientes.shift();
  }




}
