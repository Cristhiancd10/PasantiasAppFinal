import { Component, OnDestroy, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

import { NetworkStatus, PluginListenerHandle, Plugins } from '@capacitor/core';
import { StorageService } from 'src/app/servicios/storage.service';
import { ClientesService } from 'src/app/servicios/clientes.service';

import { Servicio } from 'src/app/tab2/servicio';
import { Antena } from 'src/app/tab2/antena';
import { Cliente } from 'src/app/tab2/cliente';
import { Registro } from 'src/app/tab2/registro';
import { Agendamiento } from 'src/app/tab2/agendamiento';


const { Network } = Plugins;
var aux:string;


@Component({
  selector: 'app-visita',
  templateUrl: './visita.page.html',
  styleUrls: ['./visita.page.scss'],
})
export class VisitaPage implements OnInit, OnDestroy {


  
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;
  isConnected = false;
 
  user2 = {
    
      id: 0,
      cedula: '',
      nombre: '',
      email: '',
      convencional: '',
      celular: '',
      direccionPrincipal: '',
      direccionSecundaria: '',
      direccionReferencia: '',
      latitud: '',
      longitud: '',
      servicio: [],
      antena:  {}
  }
  id=0;
  cedula:String;
  
  user1: Cliente;
  antena: Antena;
  
  
  //Variables para obtener coordenas del cliente
  latitud:number;
  longitud:number;
  
  //Variables para obtener mi ubicacion
  latitudMiubicacion:number;
  longitudMiubicacion:number;

  //Variables del cliente para abrir en google maps
  latitudmaps:number;
  longitudmaps:number;

  clienteVisita:any=[];
  realizado:boolean = false;
  deshabilitarTexto=false;
  deshabilitarDisable=false;

  // s
  
  //asyncService:

  constructor(
    private obtenerUrl: ActivatedRoute,
    private httpCliente: HttpClient,
    private geolocation: Geolocation,
     //private storage: Storage,
    private launchNavigator: LaunchNavigator,
    private storage: StorageService,
    private service: ClientesService,
    private router: Router,
    private route: ActivatedRoute

    ) { 
    

    
  }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
       params.id
       this.service.buscarV(params.id).subscribe(response => {
        this.user2=response.cliente;
        this.latitudmaps=Number(this.user2.latitud);
        this.longitudmaps=Number(this.user2.longitud);
       })
    });
    //this.textoDisable();
    
     this.textoDisable();

     console.log(this.deshabilitarTexto);
     if (this.deshabilitarTexto) {
      
    }
  }

  ngOnDestroy(): void{
    //this.networkListener.remove();
  }

  async guardar(){
      this.networkListener = Network.addListener('networkStatusChange', status => {
        console.log('Cambió estado de la red', status);
        this.networkStatus=status;
        
      },
      );
      this.networkStatus = await Network.getStatus();
      aux=String (this.networkStatus.connected);

      if( aux=="true") {
      this.service.actualizar(this.user2).subscribe(res =>{
      console.log("res "+this.user2);
      this.deshabilitarTexto = !this.deshabilitarTexto;
    });
    }else if( aux=="false") {
      console.log("No funciona esto "+this.networkStatus.connected)
      this.storage.almacenar(this.user1);
      console.log(" storage "+this.storage.listar());
    }
}

  textoDisable() {
    console.log(this.deshabilitarTexto)
    this.deshabilitarTexto = !this.deshabilitarTexto;
  }

  textoEnable() {
    console.log(this.deshabilitarTexto)
    this.deshabilitarTexto = false;
  }
  actualizar(){
  
    this.textoEnable();
  
}

listar(){
  console.log("Listado")
 console.log(this.storage.listar());
}

 
  cambioEstado(){
    this.realizado = !this.realizado;
    
  }

   

  obtenerGeolocalizacion(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
      this.latitud = geoposition.coords.latitude;
      this.longitud = geoposition.coords.longitude;
      this.user2.latitud =String(this.latitud);
      this.user2.longitud=String(this.longitud);
      console.log(this.latitud)
      console.log(this.longitud)

    }); 
  }

  doRefresh(event){
    setTimeout(() => {
      this.obtenerGeolocalizacion();
      event.target.complete();
    },1500);
  }

  miUbicacion(){
    this.geolocation.getCurrentPosition().then(position => {
      this.latitudMiubicacion = position.coords.latitude;
      this.longitudMiubicacion = position.coords.longitude;
      console.log('miubicacion:', this.latitudMiubicacion);
      console.log('miubicacion:', this.longitudMiubicacion);
    },error=>{
      console.log('error', error);
    });
  }

  navegarMapas(){
    let options: LaunchNavigatorOptions = {
      app: this.launchNavigator.APP.GOOGLE_MAPS,
      start:[this.latitudMiubicacion, this.longitudMiubicacion]
      
    };
    this.launchNavigator.navigate([Number(-this.user2.latitud), Number(-this.user2.longitud)],options)
    //this.launchNavigator.navigate([this.latitudmaps, this.longitudmaps],options)
    .then(success =>{
      console.log(success);
    },error=>{
      console.log(error);
    })
    //console.log('mapas', this.latitudmaps);
    //console.log('mapas', this.longitudmaps);

  }


}