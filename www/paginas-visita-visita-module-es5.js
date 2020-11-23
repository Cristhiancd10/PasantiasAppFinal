(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-visita-visita-module"], {
    /***/
    "/YuW":
    /*!*************************************************!*\
      !*** ./src/app/paginas/visita/visita.module.ts ***!
      \*************************************************/

    /*! exports provided: VisitaPageModule */

    /***/
    function YuW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitaPageModule", function () {
        return VisitaPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _visita_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./visita-routing.module */
      "yHf0");
      /* harmony import */


      var _visita_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./visita.page */
      "IeuH");

      var VisitaPageModule = function VisitaPageModule() {
        _classCallCheck(this, VisitaPageModule);
      };

      VisitaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _visita_routing_module__WEBPACK_IMPORTED_MODULE_5__["VisitaPageRoutingModule"]],
        declarations: [_visita_page__WEBPACK_IMPORTED_MODULE_6__["VisitaPage"]]
      })], VisitaPageModule);
      /***/
    },

    /***/
    "3Jqi":
    /*!*************************************************!*\
      !*** ./src/app/paginas/visita/visita.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function Jqi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content > ion-list {\n  position: relative;\n}\n\nion-content {\n  background-color: #07f1be;\n}\n\n.btn-center-aling {\n  text-align: center !important;\n}\n\nion-item {\n  --background: transparent;\n  color: #050505;\n  --min-height: 40px;\n}\n\nion-list {\n  background-color: transparent;\n}\n\nion-button {\n  --background:#4890DC;\n}\n\n.horizontal {\n  display: flex;\n  justify-content: center;\n}\n\n.vertical {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nimg {\n  width: 175px;\n  height: 175px;\n}\n\n:host {\n  --min-height: 30px;\n}\n\n.item-avatar {\n  width: 20px !important;\n  height: 60px !important;\n}\n\n.colorToolbar {\n  --ion-background-color: #4890DC;\n  text-align: center;\n}\n\n.centrarBoton {\n  text-align: center;\n}\n\nion-avatar {\n  width: 200px;\n  height: 200px;\n  align-items: center;\n  justify-content: center;\n}\n\n:root {\n  /** primary **/\n  /** primary end **/\n  --ion-color-mango: #ffcc66;\n  --ion-color-mango-rgb: 255, 204, 102;\n  --ion-color-mango-contrast: #000000;\n  --ion-color-mango-contrast-rgb: 0, 0, 0;\n  --ion-color-mango-shade: #e0b45a;\n  --ion-color-mango-tint: #ffd175;\n}\n\n:root ion-tab-button.tab-selected ion-icon,\n:root ion-tab-button.tab-selected ion-label {\n  color: var(--ion-color-mango) !important;\n  --ion-color-base: var(--ion-color-mango) !important;\n}\n\n.ion-color-mango {\n  --ion-color-base: var(--ion-color-mango);\n  --ion-color-base-rgb: var(--ion-color-mango-rgb);\n  --ion-color-contrast: var(--ion-color-mango-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-mango-contrast-rgb);\n  --ion-color-shade: var(--ion-color-mango-shade);\n  --ion-color-tint: var(--ion-color-mango-tint);\n}\n\n.colorealizado {\n  --color: \"success\";\n}\n\n.colornorealizado {\n  --color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy92aXNpdGEvdmlzaXRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBR0E7RUFDSSx5QkFBQTtBQUFKOztBQUdBO0VBQ0ksNkJBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSw2QkFBQTtBQUFKOztBQUdBO0VBQ0ksb0JBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFBYyxhQUFBO0FBQ2xCOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHQTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFRQTtFQUNJLGtCQUFBO0FBTEo7O0FBUUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFMSjs7QUFRQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQUxKOztBQU9ROztFQUVJLHdDQUFBO0VBQ0EsbURBQUE7QUFMWjs7QUFVQTtFQUNJLHdDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxxREFBQTtFQUNBLDZEQUFBO0VBQ0EsK0NBQUE7RUFDQSw2Q0FBQTtBQVBKOztBQVdBO0VBQ0csa0JBQUE7QUFSSDs7QUFXQTtFQUNJLGNBQUE7QUFSSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvdmlzaXRhL3Zpc2l0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudD5pb24tbGlzdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyAgdG9wOiAzMCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDdmMWJlO1xuIH1cblxuLmJ0bi1jZW50ZXItYWxpbmcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjMDUwNTA1O1xuICAgIC0tbWluLWhlaWdodDogNDBweDtcbn1cblxuaW9uLWxpc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6IzQ4OTBEQztcbn1cblxuLmhvcml6b250YWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnZlcnRpY2Fse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW1ne1xuICAgIHdpZHRoOiAxNzVweDsgaGVpZ2h0OiAxNzVweDtcbn1cblxuXG46aG9zdCB7XG4gICAgLS1taW4taGVpZ2h0OiAzMHB4O1xufVxuXG4uaXRlbS1hdmF0YXIge1xuICAgIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvclRvb2xiYXIge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM0ODkwREM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vL2lvbi10b29sYmFyIHtcbi8vICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM0ODkwREM7XG4vLyAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vL31cblxuLmNlbnRyYXJCb3RvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG46cm9vdCB7XG4gICAgLyoqIHByaW1hcnkgKiovXG4gICAgLyoqIHByaW1hcnkgZW5kICoqL1xuICAgIC0taW9uLWNvbG9yLW1hbmdvOiAjZmZjYzY2O1xuICAgIC0taW9uLWNvbG9yLW1hbmdvLXJnYjogMjU1LCAyMDQsIDEwMjtcbiAgICAtLWlvbi1jb2xvci1tYW5nby1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1tYW5nby1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gICAgLS1pb24tY29sb3ItbWFuZ28tc2hhZGU6ICNlMGI0NWE7XG4gICAgLS1pb24tY29sb3ItbWFuZ28tdGludDogI2ZmZDE3NTtcbiAgICBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQge1xuICAgICAgICBpb24taWNvbixcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFuZ28pICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItbWFuZ28pICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5pb24tY29sb3ItbWFuZ28ge1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1tYW5nbyk7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1tYW5nby1yZ2IpO1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbWFuZ28tY29udHJhc3QpO1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLW1hbmdvLWNvbnRyYXN0LXJnYik7XG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1tYW5nby1zaGFkZSk7XG4gICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLW1hbmdvLXRpbnQpO1xufVxuXG5cbi5jb2xvcmVhbGl6YWRve1xuICAgLS1jb2xvcjogXCJzdWNjZXNzXCI7XG59XG5cbi5jb2xvcm5vcmVhbGl6YWRve1xuICAgIC0tY29sb3I6IGJsYWNrO1xufSJdfQ== */";
      /***/
    },

    /***/
    "IeuH":
    /*!***********************************************!*\
      !*** ./src/app/paginas/visita/visita.page.ts ***!
      \***********************************************/

    /*! exports provided: VisitaPage */

    /***/
    function IeuH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitaPage", function () {
        return VisitaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_visita_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./visita.page.html */
      "V2dY");
      /* harmony import */


      var _visita_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./visita.page.scss */
      "3Jqi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/launch-navigator/ngx */
      "fGQ8");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var src_app_servicios_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/servicios/storage.service */
      "6k2k");
      /* harmony import */


      var src_app_servicios_clientes_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/servicios/clientes.service */
      "BRvp");

      var Network = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Network;
      var aux;

      var VisitaPage = /*#__PURE__*/function () {
        // s
        //asyncService:
        function VisitaPage(obtenerUrl, httpCliente, geolocation, //private storage: Storage,
        launchNavigator, storage, service, router, route) {
          _classCallCheck(this, VisitaPage);

          this.obtenerUrl = obtenerUrl;
          this.httpCliente = httpCliente;
          this.geolocation = geolocation;
          this.launchNavigator = launchNavigator;
          this.storage = storage;
          this.service = service;
          this.router = router;
          this.route = route;
          this.isConnected = false;
          this.user2 = {
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
            antena: {}
          };
          this.id = 0;
          this.clienteVisita = [];
          this.realizado = false;
          this.deshabilitarTexto = false;
          this.deshabilitarDisable = false;
        }

        _createClass(VisitaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (params) {
              params.id;

              _this.service.buscarV(params.id).subscribe(function (response) {
                _this.user2 = response.cliente;
                _this.latitudmaps = Number(_this.user2.latitud);
                _this.longitudmaps = Number(_this.user2.longitud);
              });
            }); //this.textoDisable();

            this.textoDisable();
            console.log(this.deshabilitarTexto);

            if (this.deshabilitarTexto) {}
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {//this.networkListener.remove();
          }
        }, {
          key: "guardar",
          value: function guardar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.networkListener = Network.addListener('networkStatusChange', function (status) {
                        console.log('Cambió estado de la red', status);
                        _this2.networkStatus = status;
                      });
                      _context.next = 3;
                      return Network.getStatus();

                    case 3:
                      this.networkStatus = _context.sent;
                      aux = String(this.networkStatus.connected);

                      if (aux == "true") {
                        this.service.actualizar(this.user2).subscribe(function (res) {
                          console.log("res " + _this2.user2);
                          _this2.deshabilitarTexto = !_this2.deshabilitarTexto;
                        });
                      } else if (aux == "false") {
                        console.log("No funciona esto " + this.networkStatus.connected);
                        this.storage.almacenar(this.user1);
                        console.log(" storage " + this.storage.listar());
                      }

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "textoDisable",
          value: function textoDisable() {
            console.log(this.deshabilitarTexto);
            this.deshabilitarTexto = !this.deshabilitarTexto;
          }
        }, {
          key: "textoEnable",
          value: function textoEnable() {
            console.log(this.deshabilitarTexto);
            this.deshabilitarTexto = false;
          }
        }, {
          key: "actualizar",
          value: function actualizar() {
            this.textoEnable();
          }
        }, {
          key: "listar",
          value: function listar() {
            console.log("Listado");
            console.log(this.storage.listar());
          }
        }, {
          key: "cambioEstado",
          value: function cambioEstado() {
            this.realizado = !this.realizado;
          }
        }, {
          key: "obtenerGeolocalizacion",
          value: function obtenerGeolocalizacion() {
            var _this3 = this;

            this.geolocation.getCurrentPosition().then(function (geoposition) {
              _this3.latitud = geoposition.coords.latitude;
              _this3.longitud = geoposition.coords.longitude;
              _this3.user2.latitud = String(_this3.latitud);
              _this3.user2.longitud = String(_this3.longitud);
              console.log(_this3.latitud);
              console.log(_this3.longitud);
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this4 = this;

            setTimeout(function () {
              _this4.obtenerGeolocalizacion();

              event.target.complete();
            }, 1500);
          }
        }, {
          key: "miUbicacion",
          value: function miUbicacion() {
            var _this5 = this;

            this.geolocation.getCurrentPosition().then(function (position) {
              _this5.latitudMiubicacion = position.coords.latitude;
              _this5.longitudMiubicacion = position.coords.longitude;
              console.log('miubicacion:', _this5.latitudMiubicacion);
              console.log('miubicacion:', _this5.longitudMiubicacion);
            }, function (error) {
              console.log('error', error);
            });
          }
        }, {
          key: "navegarMapas",
          value: function navegarMapas() {
            var options = {
              app: this.launchNavigator.APP.GOOGLE_MAPS,
              start: [this.latitudMiubicacion, this.longitudMiubicacion]
            };
            this.launchNavigator.navigate([Number(-this.user2.latitud), Number(-this.user2.longitud)], options) //this.launchNavigator.navigate([this.latitudmaps, this.longitudmaps],options)
            .then(function (success) {
              console.log(success);
            }, function (error) {
              console.log(error);
            }); //console.log('mapas', this.latitudmaps);
            //console.log('mapas', this.longitudmaps);
          }
        }]);

        return VisitaPage;
      }();

      VisitaPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
        }, {
          type: _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_7__["LaunchNavigator"]
        }, {
          type: src_app_servicios_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]
        }, {
          type: src_app_servicios_clientes_service__WEBPACK_IMPORTED_MODULE_10__["ClientesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      };

      VisitaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-visita',
        template: _raw_loader_visita_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visita_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VisitaPage);
      /***/
    },

    /***/
    "V2dY":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/visita/visita.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function V2dY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"colorToolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Visita Técnica</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <!--Icono de recargar pagina mientras bajas la pagina\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  -->\n\n    <ion-list>\n        <ion-item>\n        <ion-label position=\"stacked\">Cédula:</ion-label>\n        <ion-input  [(ngModel)]=\"user2.cedula\"  type=\"text\" readonly></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Nombres Completos:</ion-label>\n        <ion-input [(ngModel)]=\"user2.nombre\"  type=\"text\"  [readonly]='deshabilitarTexto'></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Correo Electonico:</ion-label>\n        <ion-input [(ngModel)]=\"user2.email\"  typse=\"text\"  [readonly]='deshabilitarTexto'></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Dirrecion:</ion-label>\n        <ion-input  [(ngModel)]=\"user2.direccionPrincipal\" type=\"text\"  [readonly]='deshabilitarTexto'></ion-input>\n      </ion-item>\n\n      \n      <ion-item>\n        <ion-label position=\"stacked\">Calle Secundaria:</ion-label>\n        <ion-input [(ngModel)]=\"user2.direccionSecundaria\" maxlength=\"15\" [readonly]='deshabilitarTexto'></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Referencia:</ion-label>\n        <ion-input  [(ngModel)]=\"user2.direccionReferencia\" maxlength=\"15\" [readonly]='deshabilitarTexto'></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Telefono Convencional:</ion-label>\n        <ion-input [(ngModel)]=\"user2.convencional\" maxlength=\"15\" [readonly]='deshabilitarTexto'></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Celular:</ion-label>\n        <ion-input [(ngModel)]=\"user2.celular\" maxlength=\"15\" [readonly]='deshabilitarTexto'></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Numero de Contrato:</ion-label>\n        <ion-input *ngFor=\"let char of user2.servicio\" [(ngModel)]=\"char.numeroContrato\" maxlength=\"15\" [readonly]='deshabilitarTexto'></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Plan Adquirido:</ion-label>\n        <ion-input *ngFor=\"let char of user2.servicio\" [(ngModel)]=\"char.plan\" maxlength=\"15\" [readonly]='deshabilitarTexto'></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">IP:</ion-label>\n        <ion-input *ngFor=\"let char of user2.servicio\" [(ngModel)]=\"char.ip\" maxlength=\"15\" [readonly]='deshabilitarTexto'></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Antena:</ion-label>\n        <ion-input [(ngModel)]=\"user2.antena.modelo\" maxlength=\"15\" [readonly]='deshabilitarTexto'></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label position=\"stacked\">Contrasenia:</ion-label>\n        <ion-input *ngFor=\"let char of user2.servicio\" [(ngModel)]=\"char.password\" maxlength=\"15\" [readonly]='deshabilitarTexto'></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Obseraciones:</ion-label>\n        <ion-input *ngFor=\"let char of user2.servicio\" [(ngModel)]=\"char.observaciones\" maxlength=\"15\" [readonly]='deshabilitarTexto'></ion-input>\n      </ion-item>\n\n      <ion-item>   \n        <ion-label>Coordenadas:\n          <ion-buttons>\n            <ion-button>\n              {{-user2.latitud}} {{-user2.longitud}}\n            </ion-button>\n          </ion-buttons>\n        </ion-label>\n      </ion-item>\n   \n      <ion-item>\n        <ion-tab-button (click)=\"obtenerGeolocalizacion()\">\n          <ion-icon name=\"locate-outline\"></ion-icon>\n          <ion-label>Coordenadas</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button (click)=\"miUbicacion()\" (click)=\"navegarMapas()\">\n          <ion-icon name=\"map-outline\"></ion-icon>\n          <ion-label>Google Maps</ion-label>\n        </ion-tab-button>\n      </ion-item>\n\n      <ion-item>\n        <ion-toolbar class=\"centrarBoton\">\n          <ion-button (click)=\"actualizar()\">Actualizar </ion-button>\n          <ion-button  (click)=\"textoDisable()\" (click)=\"guardar()\">Guardar</ion-button>\n        </ion-toolbar> \n      </ion-item>\n\n    </ion-list>\n  </ion-content>\n  \n  ";
      /***/
    },

    /***/
    "yHf0":
    /*!*********************************************************!*\
      !*** ./src/app/paginas/visita/visita-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: VisitaPageRoutingModule */

    /***/
    function yHf0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitaPageRoutingModule", function () {
        return VisitaPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _visita_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./visita.page */
      "IeuH");

      var routes = [{
        path: '',
        component: _visita_page__WEBPACK_IMPORTED_MODULE_3__["VisitaPage"]
      }];

      var VisitaPageRoutingModule = function VisitaPageRoutingModule() {
        _classCallCheck(this, VisitaPageRoutingModule);
      };

      VisitaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VisitaPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=paginas-visita-visita-module-es5.js.map