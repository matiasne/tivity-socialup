(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-cierre-caja-form-cierre-caja-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-cierre-caja/form-cierre-caja.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-cierre-caja/form-cierre-caja.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Cierre de caja</ion-title>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class=\"ion-padding\"> \n\n  <div class=\"form-card\">\n    <ion-text color=\"primary\">\n      <h4>Fecha de Cierre </h4> \n    </ion-text>             \n    {{fecha | date: 'dd/MM/yyyy h:mm a'}}\n  </div> \n \n  <ion-text color=\"primary\">\n    <h4>Total Efectivo {{caja.totalEfectivo | currency}}</h4>\n  </ion-text>\n\n  <div>\n    <ion-text color=\"primary\">\n      <h4>Extracción Efectivo*</h4> \n    </ion-text>             \n    <ion-item>\n      <ion-input name=\"extraccion\" type=\"number\" [(ngModel)]=\"extraccionEfectivo\" required></ion-input>\n    </ion-item>    \n  </div>\n\n  <ion-text color=\"primary\">\n    <h4>Total Debito {{caja.totalDebito | currency}}</h4>\n  </ion-text>\n\n  <div>\n    <ion-text color=\"primary\">\n      <h4>Extracción Débito*</h4> \n    </ion-text>            \n    <ion-item>\n      <ion-input name=\"extraccion\" type=\"number\" [(ngModel)]=\"extraccionDebito\" required></ion-input>\n    </ion-item>    \n  </div>\n\n  <ion-text color=\"primary\">\n    <h4>Total Credito {{caja.totalCredito | currency}}</h4>\n  </ion-text>\n\n  <div>\n    <ion-text color=\"primary\">\n      <h4>Extracción Crédito*</h4> \n    </ion-text>            \n    <ion-item>\n      <ion-input name=\"extraccion\" type=\"number\" [(ngModel)]=\"extraccionCredito\" required></ion-input>\n    </ion-item>    \n  </div>\n   \n  \n\n  <ion-toolbar>\n    <ion-button class=\"button-rounded\" slot=\"end\" (click)=\"cerrar()\">Cerrar</ion-button>\n    \n    <ion-button class=\"button-rounded\" slot=\"start\"  color=\"light\" (click)=\"cancelar()\">Cancelar</ion-button>\n  </ion-toolbar>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/form-cierre-caja/form-cierre-caja-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/form-cierre-caja/form-cierre-caja-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: FormCierreCajaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCierreCajaPageRoutingModule", function() { return FormCierreCajaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_cierre_caja_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-cierre-caja.page */ "./src/app/form-cierre-caja/form-cierre-caja.page.ts");




const routes = [
    {
        path: '',
        component: _form_cierre_caja_page__WEBPACK_IMPORTED_MODULE_3__["FormCierreCajaPage"]
    }
];
let FormCierreCajaPageRoutingModule = class FormCierreCajaPageRoutingModule {
};
FormCierreCajaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormCierreCajaPageRoutingModule);



/***/ }),

/***/ "./src/app/form-cierre-caja/form-cierre-caja.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/form-cierre-caja/form-cierre-caja.module.ts ***!
  \*************************************************************/
/*! exports provided: FormCierreCajaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCierreCajaPageModule", function() { return FormCierreCajaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _form_cierre_caja_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-cierre-caja-routing.module */ "./src/app/form-cierre-caja/form-cierre-caja-routing.module.ts");
/* harmony import */ var _form_cierre_caja_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-cierre-caja.page */ "./src/app/form-cierre-caja/form-cierre-caja.page.ts");







let FormCierreCajaPageModule = class FormCierreCajaPageModule {
};
FormCierreCajaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_cierre_caja_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormCierreCajaPageRoutingModule"]
        ],
        declarations: [_form_cierre_caja_page__WEBPACK_IMPORTED_MODULE_6__["FormCierreCajaPage"]]
    })
], FormCierreCajaPageModule);



/***/ }),

/***/ "./src/app/form-cierre-caja/form-cierre-caja.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/form-cierre-caja/form-cierre-caja.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tY2llcnJlLWNhamEvZm9ybS1jaWVycmUtY2FqYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/form-cierre-caja/form-cierre-caja.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/form-cierre-caja/form-cierre-caja.page.ts ***!
  \***********************************************************/
/*! exports provided: FormCierreCajaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCierreCajaPage", function() { return FormCierreCajaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _Services_cajas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/cajas.service */ "./src/app/Services/cajas.service.ts");
/* harmony import */ var _models_caja__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/caja */ "./src/app/models/caja.ts");
/* harmony import */ var _models_movimientoCaja__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/movimientoCaja */ "./src/app/models/movimientoCaja.ts");
/* harmony import */ var _Services_movimientos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Services/movimientos.service */ "./src/app/Services/movimientos.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10__);











let FormCierreCajaPage = class FormCierreCajaPage {
    constructor(formBuilder, navCtrl, route, authenticationService, cajasServices, movimientosService, firestore, cajasService) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.route = route;
        this.authenticationService = authenticationService;
        this.cajasServices = cajasServices;
        this.movimientosService = movimientosService;
        this.firestore = firestore;
        this.cajasService = cajasService;
        this.enumTipoMovimientoCaja = _models_movimientoCaja__WEBPACK_IMPORTED_MODULE_8__["EnumTipoMovimientoCaja"];
        this.fecha = new Date();
        this.cajaId = "";
        this.submitted = false;
        this.totalActual = 0;
        this.extraccionEfectivo = 0;
        this.extraccionDebito = 0;
        this.extraccionCredito = 0;
        this.fecha = new Date();
        this.caja = new _models_caja__WEBPACK_IMPORTED_MODULE_7__["Caja"]();
        let comercio_seleccionadoId = localStorage.getItem('comercio_seleccionadoId');
        this.movSub = this.cajasServices.get(this.route.snapshot.params.cajaId).subscribe(data => {
            this.caja.asignarValores(data);
        });
    }
    ngOnInit() {
        //Cada caja puede extraer el efectivo y dejar el debito o el credito o retirar solo esos tickets
    }
    ionViewDidLeave() {
        this.movSub.unsubscribe();
    }
    get f() { return this.datosForm.controls; }
    cerrar() {
        this.submitted = true;
        console.log(this.extraccionEfectivo + " " + this.caja.totalEfectivo);
        if (this.extraccionEfectivo > this.caja.totalEfectivo) {
            alert("La extracción en Efectivo es mayor que el monto actual");
            return;
        }
        if (this.extraccionCredito > this.caja.totalCredito) {
            alert("La extracción en Crédito es mayor que el monto actual");
            return;
        }
        if (this.extraccionDebito > this.caja.totalDebito) {
            alert("La extracción en Débito es mayor que el monto actual");
            return;
        }
        this.caja.estado = "cerrada";
        this.actualizarMontosCaja();
        this.movimientosService.setearPath(this.caja.id);
        var mov = new _models_movimientoCaja__WEBPACK_IMPORTED_MODULE_8__["MovimientoCaja"](this.authenticationService.getUID(), this.authenticationService.getEmail());
        mov.tipo = this.enumTipoMovimientoCaja.cierre;
        mov.cajaId = this.caja.id;
        mov.isCierre = true;
        mov.metodoPago = "efectivo";
        mov.monto = -Number(this.extraccionEfectivo);
        this.movimientosService.add(mov);
        var movDebito = new _models_movimientoCaja__WEBPACK_IMPORTED_MODULE_8__["MovimientoCaja"](this.authenticationService.getUID(), this.authenticationService.getEmail());
        movDebito.tipo = this.enumTipoMovimientoCaja.cierre;
        movDebito.cajaId = this.caja.id;
        movDebito.isCierre = true;
        movDebito.metodoPago = "debito";
        movDebito.monto = -Number(this.extraccionDebito);
        this.movimientosService.add(movDebito);
        var movCredito = new _models_movimientoCaja__WEBPACK_IMPORTED_MODULE_8__["MovimientoCaja"](this.authenticationService.getUID(), this.authenticationService.getEmail());
        movCredito.tipo = this.enumTipoMovimientoCaja.cierre;
        movCredito.cajaId = this.caja.id;
        movCredito.isCierre = true;
        movCredito.metodoPago = "credito";
        movCredito.monto = -Number(this.extraccionCredito);
        this.movimientosService.add(movCredito);
        this.navCtrl.back();
    }
    cancelar() {
        this.navCtrl.back();
    }
    actualizarMontosCaja() {
        this.caja.totalEfectivo = Number(this.caja.totalEfectivo) - Number(this.extraccionEfectivo);
        this.caja.totalCredito = Number(this.caja.totalCredito) - Number(this.extraccionCredito);
        this.caja.totalDebito = Number(this.caja.totalDebito) - Number(this.extraccionDebito);
        const param1 = JSON.parse(JSON.stringify(this.caja));
        this.cajasService.update(param1);
    }
};
FormCierreCajaPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _Services_cajas_service__WEBPACK_IMPORTED_MODULE_6__["CajasService"] },
    { type: _Services_movimientos_service__WEBPACK_IMPORTED_MODULE_9__["MovimientosService"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"] },
    { type: _Services_cajas_service__WEBPACK_IMPORTED_MODULE_6__["CajasService"] }
];
FormCierreCajaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-cierre-caja',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-cierre-caja.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-cierre-caja/form-cierre-caja.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-cierre-caja.page.scss */ "./src/app/form-cierre-caja/form-cierre-caja.page.scss")).default]
    })
], FormCierreCajaPage);



/***/ })

}]);
//# sourceMappingURL=form-cierre-caja-form-cierre-caja-module.js.map