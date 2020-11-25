import { Empleado } from './empleado';
import { Cliente } from './cliente';
import { Agendamiento } from './agendamiento';

export class Registro {
    id: number;
    fechaHora: string;
    observaciones: string;
    problema: string;
   // realizado:boolean;
    empleado: Empleado;
    cliente: Cliente;
    agendamiento: Agendamiento[]
    
  
 }
 