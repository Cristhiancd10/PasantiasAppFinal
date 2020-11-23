import { Cliente } from './cliente';


export class Servicio {
    id: number;
    numeroContrato: string;
    fechaContrato: string;
    plan: string;
    ip: string;
    password: string;
    observaciones: string;
    cliente: Cliente[];
    
 
 }