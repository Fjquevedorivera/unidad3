import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  nombre = "Francisco Quevedo";
  saldo = 500000;
  dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  
  datos = [
    {
      codigo: 1,
      descripcion: "naranja",
      precio: 1200
    },
    {
      codigo: 2,
      descripcion: "manzana",
      precio: 1200
    },
    {
      codigo: 3,
      descripcion: "piña",
      precio: 1200
    }
  ];

  filterDatos = undefined;

  personas: any[] = [
    {
      nombre: "Francisco Quevedo", edad: 28 
    },
    {
      nombre: "Daniel Quevedo", edad: 30 
    },
    {
      nombre: "Christian Quevedo", edad: 34 
    }
  ];

  fechaHoy = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
