import { Registro } from './registro';
import { Instalacion } from './instalacion';

export class Empleado {
    id: number;
    cedula: string;
    nombre: string;
    celular: string;
    email: string;
    password: string;
    departamento: string;
    registro: Registro[];
    instalacion: Instalacion[];
    
  
 }