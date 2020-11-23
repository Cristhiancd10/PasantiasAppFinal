import { Registro } from './registro';
import { Servicio } from './servicio';
import { Antena } from './antena';

export class Cliente {
    id: number;
    cedula: string;
    nombre: string;
    email: string;
    convencional: string;
    celular: string;
    direccionPrincipal: string;
    direccionSecundaria: string;
    direccionReferencia: string;
    latitud: string;
    longitud: string;
    servicio: Servicio[];
    antena:  Antena;
     
 }