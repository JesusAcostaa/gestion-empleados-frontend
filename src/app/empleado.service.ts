import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //Esta URL obtiene el listado de todos los empleados en el backend
  private baseURL = "http://localhost:8080/api/v1/empleados";

  constructor() { }


}
