(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-nuevains-nuevains-module"],{

/***/ "+BKV":
/*!*************************************************************!*\
  !*** ./src/app/paginas/nuevains/nuevains-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: NuevainsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevainsPageRoutingModule", function() { return NuevainsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nuevains_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nuevains.page */ "D9s1");




const routes = [
    {
        path: '',
        component: _nuevains_page__WEBPACK_IMPORTED_MODULE_3__["NuevainsPage"]
    }
];
let NuevainsPageRoutingModule = class NuevainsPageRoutingModule {
};
NuevainsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NuevainsPageRoutingModule);



/***/ }),

/***/ "6T7Q":
/*!*****************************************************!*\
  !*** ./src/app/paginas/nuevains/nuevains.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content > ion-list {\n  position: relative;\n}\n\nion-content {\n  background-color: #07f1be;\n}\n\n.btn-center-aling {\n  text-align: center !important;\n}\n\nion-item {\n  --background: transparent;\n  color: #050505;\n  --min-height: 40px;\n}\n\nion-list {\n  background-color: transparent;\n}\n\nion-button {\n  --background:#4890DC;\n}\n\n.horizontal {\n  display: flex;\n  justify-content: center;\n}\n\n.vertical {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nimg {\n  width: 175px;\n  height: 175px;\n}\n\n:host {\n  --min-height: 30px;\n}\n\n.item-avatar {\n  width: 20px !important;\n  height: 60px !important;\n}\n\nion-toolbar {\n  --ion-background-color: #4890DC;\n  text-align: center;\n}\n\nion-avatar {\n  width: 200px;\n  height: 200px;\n  align-items: center;\n  justify-content: center;\n}\n\n:root {\n  /** primary **/\n  /** primary end **/\n  --ion-color-mango: #ffcc66;\n  --ion-color-mango-rgb: 255, 204, 102;\n  --ion-color-mango-contrast: #000000;\n  --ion-color-mango-contrast-rgb: 0, 0, 0;\n  --ion-color-mango-shade: #e0b45a;\n  --ion-color-mango-tint: #ffd175;\n}\n\n:root ion-tab-button.tab-selected ion-icon,\n:root ion-tab-button.tab-selected ion-label {\n  color: var(--ion-color-mango) !important;\n  --ion-color-base: var(--ion-color-mango) !important;\n}\n\n.ion-color-mango {\n  --ion-color-base: var(--ion-color-mango);\n  --ion-color-base-rgb: var(--ion-color-mango-rgb);\n  --ion-color-contrast: var(--ion-color-mango-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-mango-contrast-rgb);\n  --ion-color-shade: var(--ion-color-mango-shade);\n  --ion-color-tint: var(--ion-color-mango-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9udWV2YWlucy9udWV2YWlucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUdBO0VBQ0kseUJBQUE7QUFBSjs7QUFHQTtFQUNJLDZCQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksNkJBQUE7QUFBSjs7QUFHQTtFQUNJLG9CQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQWMsYUFBQTtBQUNsQjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0E7RUFDSSwrQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQUFKOztBQUVROztFQUVJLHdDQUFBO0VBQ0EsbURBQUE7QUFBWjs7QUFLQTtFQUNJLHdDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxxREFBQTtFQUNBLDZEQUFBO0VBQ0EsK0NBQUE7RUFDQSw2Q0FBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9udWV2YWlucy9udWV2YWlucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudD5pb24tbGlzdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyAgdG9wOiAzMCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDdmMWJlO1xuIH1cblxuLmJ0bi1jZW50ZXItYWxpbmcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjMDUwNTA1O1xuICAgIC0tbWluLWhlaWdodDogNDBweDtcbn1cblxuaW9uLWxpc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6IzQ4OTBEQztcbn1cblxuLmhvcml6b250YWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnZlcnRpY2Fse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW1ne1xuICAgIHdpZHRoOiAxNzVweDsgaGVpZ2h0OiAxNzVweDtcbn1cblxuXG46aG9zdCB7XG4gICAgLS1taW4taGVpZ2h0OiAzMHB4O1xufVxuXG4uaXRlbS1hdmF0YXIge1xuICAgIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNDg5MERDO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuOnJvb3Qge1xuICAgIC8qKiBwcmltYXJ5ICoqL1xuICAgIC8qKiBwcmltYXJ5IGVuZCAqKi9cbiAgICAtLWlvbi1jb2xvci1tYW5nbzogI2ZmY2M2NjtcbiAgICAtLWlvbi1jb2xvci1tYW5nby1yZ2I6IDI1NSwgMjA0LCAxMDI7XG4gICAgLS1pb24tY29sb3ItbWFuZ28tY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3ItbWFuZ28tY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAgIC0taW9uLWNvbG9yLW1hbmdvLXNoYWRlOiAjZTBiNDVhO1xuICAgIC0taW9uLWNvbG9yLW1hbmdvLXRpbnQ6ICNmZmQxNzU7XG4gICAgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIHtcbiAgICAgICAgaW9uLWljb24sXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1hbmdvKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLW1hbmdvKSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaW9uLWNvbG9yLW1hbmdvIHtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItbWFuZ28pO1xuICAgIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItbWFuZ28tcmdiKTtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLW1hbmdvLWNvbnRyYXN0KTtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1tYW5nby1jb250cmFzdC1yZ2IpO1xuICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItbWFuZ28tc2hhZGUpO1xuICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1tYW5nby10aW50KTtcbn0iXX0= */");

/***/ }),

/***/ "7rsg":
/*!**********************************!*\
  !*** ./src/app/tab2/servicio.ts ***!
  \**********************************/
/*! exports provided: Servicio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Servicio", function() { return Servicio; });
class Servicio {
}


/***/ }),

/***/ "D9s1":
/*!***************************************************!*\
  !*** ./src/app/paginas/nuevains/nuevains.page.ts ***!
  \***************************************************/
/*! exports provided: NuevainsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevainsPage", function() { return NuevainsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nuevains_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nuevains.page.html */ "dDV0");
/* harmony import */ var _nuevains_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nuevains.page.scss */ "6T7Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "fGQ8");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var src_app_tab2_cliente__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/tab2/cliente */ "jC1c");
/* harmony import */ var src_app_servicios_clientes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/servicios/clientes.service */ "BRvp");
/* harmony import */ var src_app_servicios_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/servicios/storage.service */ "6k2k");
/* harmony import */ var src_app_tab2_servicio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/tab2/servicio */ "7rsg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");












let NuevainsPage = class NuevainsPage {
    constructor(geolocation, launchNavigator, service, storage, router) {
        this.geolocation = geolocation;
        this.launchNavigator = launchNavigator;
        this.service = service;
        this.storage = storage;
        this.router = router;
        this.cliente = new src_app_tab2_cliente__WEBPACK_IMPORTED_MODULE_7__["Cliente"]();
        this.servicio = new src_app_tab2_servicio__WEBPACK_IMPORTED_MODULE_10__["Servicio"]();
        this.servicios = [];
        this.antenas = [];
        this.isConnected = false;
        this.lista_array = [];
        this.service.ListarAnt().subscribe(res => {
            this.antenas = res;
            console.log(this.antenas, "ANTENAS");
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        //this.networkListener.remove();
    }
    detect(evt) {
        let pos = this.antenas.findIndex(({ id }) => id >= evt.detail.value);
        this.antena = this.antenas[pos];
        console.log("Cambio", evt.detail.value, pos, this.antenas[pos]);
    }
    detect1(evt) {
        console.log(evt.detail.value);
        this.plan = (evt.detail.value);
        this.servicio.plan = this.plan;
    }
    crear() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.networkListener = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Network"].addListener('networkStatusChange', status => {
                console.log('Cambió estado de la red', status);
                this.networkStatus = status;
            });
            this.networkStatus = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Network"].getStatus();
            const aux = String(this.networkStatus.connected);
            if (aux == "true") {
                console.log("Si funciona esto " + this.networkStatus.connected);
                console.log("Si funciona esto " + this.networkStatus.connected);
                // this.cliente.servicio=this.servicio;
                this.servicios.push(this.servicio);
                this.cliente.servicio = this.servicios;
                this.cliente.antena = this.antena;
                console.log(this.cliente, "Fuera de post");
                this.service.crear(this.cliente).subscribe(res => {
                    this.router.navigate(['/tabs'], { queryParams: {
                            id: this.cliente.id
                        } });
                    console.log(res);
                });
            }
            else if (aux == "false") {
                console.log("No funciona esto " + this.networkStatus.connected);
                this.storage.almacenar(this.cliente);
                console.log(" storage " + this.storage.listar());
            }
        });
    }
    listar() {
        console.log("Listado");
        console.log(this.storage.listar());
    }
    limpiar() {
        this.storage.limpiar();
        console.log('LocalStorage Vacio');
    }
    obtenerGeolocalizacion() {
        this.geolocation.getCurrentPosition().then((geoposition) => {
            this.latitud = String(geoposition.coords.latitude);
            this.longitud = String(geoposition.coords.longitude);
            console.log(this.latitud);
            console.log(this.longitud);
            this.cliente.latitud = this.latitud;
            this.cliente.longitud = this.longitud;
        });
    }
    doRefresh(event) {
        setTimeout(() => {
            this.obtenerGeolocalizacion();
            event.target.complete();
        }, 1500);
    }
    miUbicacion() {
        this.geolocation.getCurrentPosition().then(position => {
            this.latitudMiubicacion = position.coords.latitude;
            this.longitudMiubicacion = position.coords.longitude;
            console.log('miubicacion:', this.latitudMiubicacion);
            console.log('miubicacion:', this.longitudMiubicacion);
        }, error => {
            console.log('error', error);
        });
    }
    navegarMapas() {
        let options = {
            app: this.launchNavigator.APP.GOOGLE_MAPS,
            start: [this.latitudMiubicacion, this.longitudMiubicacion]
        };
        this.launchNavigator.navigate('Cuenca, EC', options)
            //this.launchNavigator.navigate([this.latitudmaps, this.longitudmaps],options)
            .then(success => {
            console.log(success);
        }, error => {
            console.log(error);
        });
        //console.log('mapas', this.latitudmaps);
        //console.log('mapas', this.longitudmaps);
    }
    validadorDeCedula(cedula) {
        let cedulaCorrecta = false;
        if (cedula.length == 10) {
            let tercerDigito = parseInt(cedula.substring(2, 3));
            if (tercerDigito < 6) {
                // El ultimo digito se lo considera dígito verificador
                let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
                let verificador = parseInt(cedula.substring(9, 10));
                let suma = 0;
                let digito = 0;
                for (let i = 0; i < (cedula.length - 1); i++) {
                    digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];
                    suma += ((parseInt((digito % 10) + '') + (parseInt((digito / 10) + ''))));
                    //      console.log(suma+" suma"+coefValCedula[i]); 
                }
                suma = Math.round(suma);
                //  console.log(verificador);
                //  console.log(suma);
                //  console.log(digito);
                if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10) == verificador)) {
                    cedulaCorrecta = true;
                }
                else if ((10 - (Math.round(suma % 10))) == verificador) {
                    cedulaCorrecta = true;
                }
                else {
                    cedulaCorrecta = false;
                }
            }
            else {
                cedulaCorrecta = false;
            }
        }
        else {
            cedulaCorrecta = false;
        }
        this.validador = cedulaCorrecta;
    }
};
NuevainsPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] },
    { type: _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_4__["LaunchNavigator"] },
    { type: src_app_servicios_clientes_service__WEBPACK_IMPORTED_MODULE_8__["ClientesService"] },
    { type: src_app_servicios_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }
];
NuevainsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nuevains',
        template: _raw_loader_nuevains_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nuevains_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NuevainsPage);



/***/ }),

/***/ "MIyc":
/*!*****************************************************!*\
  !*** ./src/app/paginas/nuevains/nuevains.module.ts ***!
  \*****************************************************/
/*! exports provided: NuevainsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevainsPageModule", function() { return NuevainsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nuevains_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nuevains-routing.module */ "+BKV");
/* harmony import */ var _nuevains_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nuevains.page */ "D9s1");







let NuevainsPageModule = class NuevainsPageModule {
};
NuevainsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nuevains_routing_module__WEBPACK_IMPORTED_MODULE_5__["NuevainsPageRoutingModule"]
        ],
        declarations: [_nuevains_page__WEBPACK_IMPORTED_MODULE_6__["NuevainsPage"]]
    })
], NuevainsPageModule);



/***/ }),

/***/ "dDV0":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/nuevains/nuevains.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Nueva Instalación</ion-title>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-list>\n    <!-- <ion-item>\n      <ion-label position=\"stacked\">Fecha de instalación: </ion-label>\n      <ion-datetime display-format=\"DD MMM, YYYY\"  name=\"fecha\"></ion-datetime>\n    </ion-item> -->\n\n    <ion-item>\n      <ion-label position=\"stacked\">Cédula:</ion-label>\n      <ion-row >\n        <ion-input  name=\"cedula\" [(ngModel)]=\"cliente.cedula\" (change)=\"validador=true\" (change)=\"validadorDeCedula(cliente.cedula)\" type=\"text\" placeholder=\"0101010101\" maxlength=\"10\" autocomplete=\"off\" autocorrect=\"off\">\n        </ion-input>\n        <small  *ngIf=\"!validador\" class=\"text-danger\">Cedula Invalida</small>\n\n      </ion-row>\n      \n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Nombres Completos:</ion-label>\n      <ion-input [(ngModel)]=\"cliente.nombre\" style=\"text-transform:uppercase\" type=\"text\" placeholder=\"Apellidos Nombres\" autocomplete=\"off\" autocorrect=\"off\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Correo Electrónico:</ion-label>\n      <ion-input  [(ngModel)]=\"cliente.email\" type=\"text\" placeholder=\"Correo electrónico\" autocomplete=\"off\" autocorrect=\"off\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Teléfonos:</ion-label>\n      <ion-input [(ngModel)]=\"cliente.convencional\" type=\"text\" placeholder=\"Convencional\" maxlength=\"7\" autocomplete=\"off\" autocorrect=\"off\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input [(ngModel)]=\"cliente.celular\" type=\"text\" placeholder=\"Celular\" maxlength=\"10\" autocomplete=\"off\" autocorrect=\"off\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Dirección:</ion-label>\n      <ion-input [(ngModel)]=\"cliente.direccionPrincipal\" type=\"text\" placeholder=\"Calle principal\" autocomplete=\"off\" autocorrect=\"off\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input [(ngModel)]=\"cliente.direccionSecundaria\" type=\"text\" placeholder=\"Calle secundaria\" autocomplete=\"off\" autocorrect=\"off\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input [(ngModel)]=\"cliente.direccionReferencia\" type=\"text\" placeholder=\"Referencia\" autocomplete=\"off\" autocorrect=\"off\"></ion-input>\n    </ion-item>\n\n    \n\n    <ion-item>\n      <ion-label position=\"stacked\">Número Contrato:</ion-label>\n      <ion-input [(ngModel)]=\"servicio.numeroContrato\" type=\"text\" placeholder=\"Número contrato\" autocomplete=\"off\" autocorrect=\"off\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Plan Adquirido:</ion-label>\n        <ion-select (ionChange)=\"detect1($event)\" ok-text=\"Seleccionar\" cancel-text=\"Cancelar\" multiple=\"false\">\n          <ion-select-option value=\"Basico\">Básico</ion-select-option>\n          <ion-select-option value=\"Intermedio\">Intermedio</ion-select-option>\n          <ion-select-option value=\"Alto\">Alto</ion-select-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">IP:</ion-label>\n      <ion-input   [(ngModel)]=\"servicio.ip\" type=\"text\" placeholder=\"XXX.XXX.XXX.XXX\" maxlength=\"15\" autocomplete=\"off\" autocorrect=\"off\"></ion-input>\n    </ion-item> \n\n    \n    <ion-item>\n      <ion-label>Antenas</ion-label>\n      <ion-select (ionChange)=\"detect($event)\" ok-text=\"Seleccionar\" cancel-text=\"Cancelar\" multiple=\"false\">\n          <ion-select-option *ngFor=\"let ant of antenas\" value=\"{{ant.id}}\">{{ant.modelo}}</ion-select-option>\n      </ion-select>\n  </ion-item>\n\n  <!-- <ion-item>\n    <ion-list>\n      <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\" (ionChange)=\"detect($event)\">\n        <ion-list-header>\n          <ion-label>Name</ion-label>\n        </ion-list-header>\n  \n        <ion-item *ngFor=\"let item of antenas\" (ionSelect)=\"detect($event)\"\n         >\n          <ion-label>{{item.modelo}}</ion-label>\n          <ion-radio slot=\"start\" name=\"{{item.modelo}}\" value=\"{{item.modelo}}\"\n            ></ion-radio>\n        </ion-item>\n  \n      </ion-radio-group>\n    </ion-list>\n  </ion-item> -->\n\n    <ion-item>\n      <ion-label position=\"stacked\">Contraseña:</ion-label>\n      <ion-input   [(ngModel)]=\"servicio.password\" type=\"text\" maxlength=\"15\" autocomplete=\"off\" autocorrect=\"off\"></ion-input>\n    </ion-item>    \n\n    <ion-item>   \n      <ion-label>Coordenadas:\n        <ion-buttons>\n          <ion-button>\n            {{cliente.latitud}} {{cliente.longitud}}\n          </ion-button>\n        </ion-buttons>\n      </ion-label>\n    </ion-item>\n\n      <ion-tab-button (click)=\"obtenerGeolocalizacion()\">\n        <ion-icon name=\"locate-outline\"></ion-icon>\n        <ion-label>Coordenadas</ion-label>\n      </ion-tab-button>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Observaciones:</ion-label>\n        <ion-input   [(ngModel)]=\"servicio.observaciones\" type=\"text\" maxlength=\"15\" autocomplete=\"off\" autocorrect=\"off\"></ion-input>\n      </ion-item>   \n  </ion-list>\n\n\n<div class=\"ion-padding ion-text-center\">\n  <ion-button color=\"danger\" expand=\"block\" (click)=\"crear()\">\n    Guardar\n  </ion-button>\n</div>\n</ion-content>\n\n\n");

/***/ }),

/***/ "jC1c":
/*!*********************************!*\
  !*** ./src/app/tab2/cliente.ts ***!
  \*********************************/
/*! exports provided: Cliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cliente", function() { return Cliente; });
class Cliente {
}


/***/ })

}]);
//# sourceMappingURL=paginas-nuevains-nuevains-module-es2015.js.map