import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientesService } from '../servicios/clientes.service';
import { StorageService } from '../servicios/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../tab2/empleado';
import { Cliente } from '../tab2/cliente';
import { Antena } from '../tab2/antena';
import { Agendamiento } from '../tab2/agendamiento';
import { Registro } from '../tab2/registro';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  disablePin: boolean = false;
  color1:string;

  user = {
    id: 0,
    fechaHora: '',
    observaciones: '',
    problema: '',
    realizado:false,
    empleado: {},
   cliente: {},
    agendamiento: [],
  }
  checkbox={};
  color='#FFFFFF';
  id=0;
  id1=0;
  nombre=null;
  apellido=null;
  lat1=0;
  lng1=0;
   clientes1: Registro[] = [];
   clientes: Cliente;
 
  check:any;
  aux:boolean;
  datos:any=[];
  visita:Registro;

  constructor(private router: Router, private route: ActivatedRoute, public httpCliente:HttpClient, private service: ClientesService,  public storage:StorageService) {
    this.lista();
    this.clientes1.forEach(id => this.checkbox[this.user.id]=true);
   
      
  }
  ngOnInit(){
    this.route.queryParams
     .subscribe(params => {
        params.id
        this.service.buscarV(params.id).subscribe(response => {
          this.user=response;
          this.id1=this.user.id;
          console.log("user.id "+this.user.id);
        })
     });
    
   } 
  public lista(){
    this.service.todasV().subscribe(response => {
      this.clientes1 = response;
      console.log(this.clientes1)
    },(error) => {
      console.log(error);
      
    });
   }

   actualizar(id: number) {
    //this.navCtrl.push("Tab5Page");
    console.log("Hola")
    this.router.navigate(['/visita'], {
      queryParams:{
        id
      }
    });
  }
   
    
  cambiar(event, char){
    this.visita=char;
    console.log("actualizar", this.visita);
    this.service.actualizarVisita(this.visita).subscribe(response => {
      console.log(response);
      
    });
    
  }
    
    
}
