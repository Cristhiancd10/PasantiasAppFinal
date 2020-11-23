
import { Empleado } from './empleado';

export class Instalacion {
    id: number;
    tipoServicio: string;
    nombre: string;
    direccion: string;
    telefono: string;
    coordenadas: string;
    observaciones: string;
    tecnico: string;
    empleado: Empleado[];
   
  
 }