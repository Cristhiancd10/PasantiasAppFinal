import { Servicio } from './servicio';
import { Telefono } from './telefono';
import { DatoServicio } from './datoServicio';
import { Registro } from './registro';
import { Antena } from './antena';
//import { Registro } from './reistro';

export class Cliente {
    id: number;
    cedula: string;
    nombre: string;
    apellido: string;
    email: string;
    convencional:string;
    celular:string;
    dirPrincipal: string;
    dirSecundaria: string;
    dirReferencia: string;
    latitud: string;
    longitud: string;
    servicio: Servicio[];
    //registro:Registro[];
   //datoServicio:DatoServicio[];
    antena:  Antena;
   //telefono:Telefono[];
     
 }