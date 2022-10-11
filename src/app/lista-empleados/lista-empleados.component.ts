import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {


  empleados:Empleado[];

  constructor() { }

  ngOnInit(): void {
    this.empleados= [{
      "id":1,
      "nombre":"Jesus",
      "apellido":"Acosta",
      "email": "joacoasta@ufpso.edu.co"
    },
    {
      "id":2,
      "nombre":"Yuddy",
      "apellido":"Arevalo",
      "email": "arevaloy63@gmail.com"
    },

  ];
  }

}
