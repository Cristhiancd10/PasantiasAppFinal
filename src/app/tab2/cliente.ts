import { Servicio } from './servicio';
import { Telefono } from './telefono';
import { DatoServicio } from './datoServicio';
//import { Registro } from './reistro';

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
    //servicio: Servicio[];
    //registro:Registro[];
    datoServicio:DatoServicio[];
   // antena:  Antena;
   telefono:Telefono[];
     
 }