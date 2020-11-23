import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Empleado } from '../tab2/empleado';
import { Cliente } from '../tab2/cliente';
import { Instalacion } from '../tab2/instalacion';
import { Antena } from '../tab2/antena';
import { Agendamiento } from '../tab2/agendamiento';
import { Registro } from '../tab2/registro';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
        private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
        constructor(private http: HttpClient) { }

        // todas():Observable <Cliente[]> {
        //   return this.http.get<Cliente[]>('http://34.95.195.201:8080/CallCenterA/Trabajo/crud/listar');
        // }

       
        todasV():Observable <Registro[]> {
          return this.http.get<Registro[]>('http://35.184.60.118:8080/CallCenterAstronet/srv/astronet/listRgVT');
        //  return this.http.get<Registro[]>('http://localhost:8080/CallCenterAstronet/srv/astronet/listRgVT');
        }

        todasI():Observable <Instalacion[]> {
          return this.http.get<Instalacion[]>('http://35.184.60.118:8080/CallCenterAstronet/srv/astronet/listInst');
          // return this.http.get<Instalacion[]>('http://localhost:8080/CallCenterAstronet/srv/astronet/listInst');
        }

        ListarAnt():Observable <Antena[]> {
           return this.http.get<Antena[]>('http://35.184.60.118:8080/CallCenterAstronet/srv/astronet/listarAn');
          // return this.http.get<Antena[]>('http://localhost:8080/CallCenterAstronet/srv/astronet/listarAn');
        }

        crear(cliente: Cliente): Observable<Response> {
          return this.http.post<Response>('http://35.184.60.118:8080/CallCenterAstronet/srv/astronet/create', cliente, {headers: this.httpHeaders});
          //  return this.http.post<Response>('http://localhost:8080/CallCenterAstronet/srv/astronet/create', cliente, {headers: this.httpHeaders});
      }

      actualizar(cliente: any): Observable<Response> {
        console.log("cliente actualizar "+cliente)
        return this.http.put<Response>('http://35.184.60.118:8080/CallCenterAstronet/srv/astronet/actualizar',cliente);
        //  return this.http.put<Response>('http://localhost:8080/CallCenterAstronet/srv/astronet/actualizar',cliente);
    }

    actualizarVisita(registro: Registro): Observable<Response> {
      console.log("Registro actualizado " + registro)
      return this.http.put<Response>('http://35.184.60.118:8080/CallCenterAstronet/srv/astronet/actualizarVisita',registro);
      //  return this.http.put<Response>('http://localhost:8080/CallCenterAstronet/srv/astronet/actualizarVisita', registro);
    }

    actualizarInstalacion(instalacion: Instalacion): Observable<Response> {
      console.log("Instalacion actualizada " + instalacion)
      return this.http.put<Response>('http://35.184.60.118:8080/CallCenterAstronet/srv/astronet/actualizarInstalacion',instalacion);
      //  return this.http.put<Response>('http://localhost:8080/CallCenterAstronet/srv/astronet/actualizarInstalacion', instalacion);
    }

    buscarV(id:number):Observable <Registro> {
      console.log("id service "+id);
       return this.http.get<Registro>(`http://35.184.60.118:8080/CallCenterAstronet/srv/astronet/buscarIdVis?id=${id}`);
    // return this.http.get<Registro>(`http://localhost:8080/CallCenterAstronet/srv/astronet/buscarIdVis?id=${id}`);
    }

    // buscar(id:number):Observable <Cliente> {
    //   // return this.http.get<Cliente>(`http://34.95.195.201:8080/CallCenterAstronet/srv/astronet/buscarId?id=${id}`);
    //   return this.http.get<Cliente>(`http://localhost:8080/CallCenter/srv/astronet/buscarId?id=${id}`);
     
    // }


    buscarI(id:number):Observable <Instalacion> {
      //  return this.http.get<Instalacion>(`http://34.95.195.201:8080/CallCenterAstronet/srv/astronet/buscarInsId?id=${id}`);
      return this.http.get<Instalacion>(`http://35.184.60.118:8080/CallCenterAstronet/srv/astronet/buscarInsId?id=${id}`);
      // return this.http.get<Instalacion>(`http://localhost:8080/CallCenterAstronet/srv/astronet/buscarInsId?id=${id}`);
    }

  
    login(cliente: Empleado): Observable<Empleado> {
      //  return this.http.post<Empleado>('http://34.95.195.201:8080/CallCenterAstronet/srv/astronet/login', cliente, {headers: this.httpHeaders});
       return this.http.post<Empleado>('http://35.184.60.118:8080/CallCenterAstronet/srv/astronet/login', cliente, {headers: this.httpHeaders});
      // return this.http.post<Empleado>('http://localhost:8080/CallCenterAstronet/srv/astronet/login', cliente, {headers: this.httpHeaders});
    }
  }
  
