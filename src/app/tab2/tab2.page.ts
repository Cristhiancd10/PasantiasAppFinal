import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../componentes/popinfo/popinfo.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RadioService } from '../servicios/radio.service';
import { Empleado } from './empleado';
import { Cliente } from './cliente';
import { Instalacion } from './instalacion';
import { StorageService } from '../servicios/storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  user = {
    id : 0,
    tipoServicio: "",
    nombre: "",
    direccion: "",
    telefono: "",
    coordenadas: "",
    observaciones: "",
    tecnico: "",
    empleado: [],
    
  }

  color1:string;
  checkbox={};

  id=0;
  nombre=null;
  tipoServicio=null;
  direccion=null;
  telefono=null;
  coordenadas=null;
  observaciones=null;
  tecnico=null;
  clientes: Instalacion[] = [];
  clientes1: Empleado[] = [];
  instalacion:Instalacion;


  deshabilitarTexto=false;

  datos:any=[];
  public realizado:boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public httpCliente:HttpClient,
    private service: RadioService,
    public popoverCtrl: PopoverController,
    public storage:StorageService
    
    ) {
    this.lista();
    this.clientes1.forEach(id => this.checkbox[this.user.id]=false);

    //this.login();
  }

  ngOnInit(){
    this.route.queryParams
     .subscribe(params => {
        params.id
        this.service.buscarI(params.id).subscribe(response => {
          this.user=response;
          console.log("user.id "+this.user.id);
        })
     });
     this.textoEnable();
   } 

   textoDisable() {
    console.log("deshabilitad "+this.deshabilitarTexto)
    this.deshabilitarTexto = true;
  }

  textoEnable() {
    console.log(this.deshabilitarTexto)
    this.deshabilitarTexto = false;
  }

  public lista(){
    this.service.todasI().subscribe(response => {
      this.clientes = response;
      this.id = Number(response[0]['id']);
      this.tipoServicio = String(response[0]['tipoServicio']);
      this.nombre = String(response[0]['nombre']);
      this.direccion = String(response[0]['direccion']);
      this.telefono = String(response[0]['telefono']);
      this.coordenadas = String(response[0]['coordenadas']);
      this.observaciones = String(response[0]['observaciones']);
      this.tecnico = String(response[0]['tecnico']);
      console.log(response[0]['tecnico']);
      

      
    },(error) => {
      console.log(error);
      
    });
   }

  actualizar(id: number) {
    //this.navCtrl.push("Tab5Page");
    console.log("Hola")
    this.router.navigate(['/instalacion'], {
      queryParams:{
        id
      }
    });
  }

  cambiaEstado(){
     console.log(this.realizado);
   }

  async mostrarPop( evento ){
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: evento,
      mode: 'ios',
      
    });
    await popover.present();

    //popover.onDidDismiss(); despues de cerrar
    //popover.onWillDismiss(); justo antes de cerrar
    const { data } = await popover.onWillDismiss();
    console.log('Padre:', data);
 }

  cambiar(event, char) {
    this.instalacion = char;
    console.log("actualizar", this.instalacion);
    this.service.actualizarInstalacion(this.instalacion).subscribe(response => {
      console.log(response);

    });
    this.textoDisable();
  }
}