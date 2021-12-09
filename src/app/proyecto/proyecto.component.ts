import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

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

  ciudades: any[] = [
    {
      nombre: "Concepción",
      personas: [
        {
          nombre: "Francisco Quevedo", edad: 28 
        },
        {
          nombre: "Daniel Quevedo", edad: 30 
        }
      ]
    },
    {
      nombre: "Santiago",
      personas: [
        {
          nombre: "Christian Quevedo", edad: 34 
        }
      ]
    },
    {
      nombre: "Talca",
      personas: [
        {
          nombre: "Emerson Quevedo", edad: 66 
        },
        {
          nombre: "Laura Rivera", edad: 63 
        }
      ]
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
