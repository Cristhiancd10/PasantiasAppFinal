import { Servicio } from './servicio';
import { Telefono } from './telefono';
import { DatoServicio } from './datoServicio';
import { Registro } from './registro';
//import { Registro } from './reistro';

export class Cliente {
    id: number;
    cedula: string;
    nombre: string;
    apellido: string;
    email: string;
    dirPrincipal: string;
    dirSecundaria: string;
    dirReferencia: string;
    latitud: string;
    longitud: string;
    servicio: Servicio[];
    //registro:Registro[];
   //datoServicio:DatoServicio[];
   // antena:  Antena;
   telefono:Telefono[];
     
 }