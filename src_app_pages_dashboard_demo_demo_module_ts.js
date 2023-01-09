"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_dashboard_demo_demo_module_ts"],{

/***/ 22155:
/*!**************************************!*\
  !*** ./src/app/common/UrlDisplay.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlDisplayId": () => (/* binding */ UrlDisplayId)
/* harmony export */ });
var UrlDisplayId;
(function (UrlDisplayId) {
    //dashboard
    UrlDisplayId["Demo"] = "/default/dashboard/demo";
    UrlDisplayId["Analysis"] = "/default/dashboard/analysis";
    UrlDisplayId["Monitor"] = "/default/dashboard/monitor";
    UrlDisplayId["Workbench"] = "/default/dashboard/workbench";
    UrlDisplayId["spxe00101"] = "xe/spxe00101";
    //chuyen
    UrlDisplayId["spch00101"] = "chuyen/spch00101";
    UrlDisplayId["spch00201"] = "chuyen/spch00201";
    // khach hang
    UrlDisplayId["spkh00101"] = "khachhang/spkh00101";
    UrlDisplayId["spkh00201"] = "khachhang/spkh00201";
})(UrlDisplayId || (UrlDisplayId = {}));


/***/ }),

/***/ 83110:
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/demo/demo-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoRoutingModule": () => (/* binding */ DemoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo.component */ 78835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    { path: '', component: _demo_component__WEBPACK_IMPORTED_MODULE_0__.DemoComponent, data: { title: 'Trang Demo', key: 'demo' } }
];
class DemoRoutingModule {
}
DemoRoutingModule.ɵfac = function DemoRoutingModule_Factory(t) { return new (t || DemoRoutingModule)(); };
DemoRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DemoRoutingModule });
DemoRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DemoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 78835:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/demo/demo.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoComponent": () => (/* binding */ DemoComponent)
/* harmony export */ });
/* harmony import */ var src_app_pages_system_base_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/system/base/base.component */ 13951);
/* harmony import */ var _app_common_UrlDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/common/UrlDisplay */ 22155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common/webservice.service */ 91565);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/input-number/input-number.component */ 66348);
/* harmony import */ var _shared_components_input_currency_input_currency_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/input-currency/input-currency.component */ 38300);










class DemoComponent extends src_app_pages_system_base_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(webService, router, cdf, datePipe, store) {
        super(webService, router, cdf, datePipe);
        this.webService = webService;
        this.router = router;
        this.cdf = cdf;
        this.datePipe = datePipe;
        this.store = store;
        this.DisplayScreenID = _app_common_UrlDisplay__WEBPACK_IMPORTED_MODULE_1__.UrlDisplayId.Demo;
        this.amountMode = 1000;
        this.numberMode = 1000;
    }
    changeAmount($event) { this.amountMode = $event; }
    changeNumber($event) { this.numberMode = $event; }
    fnInit() {
        console.log("nam pham");
        this.cdf.markForCheck();
    }
    destroy() { }
}
DemoComponent.ɵfac = function DemoComponent_Factory(t) { return new (t || DemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_2__.WebserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store)); };
DemoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DemoComponent, selectors: [["app-demo"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 6, consts: [[3, "Amount", "changeAmount"], [3, "Number", "changeNumber"]], template: function DemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "app-input-currency", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("changeAmount", function DemoComponent_Template_app_input_currency_changeAmount_5_listener($event) { return ctx.changeAmount($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "app-input-number", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("changeNumber", function DemoComponent_Template_app_input_number_changeNumber_7_listener($event) { return ctx.changeNumber($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("nam pham word : ", ctx.formItemNm[2], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Title: ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("Amount", ctx.amountMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\n", ctx.amountMode, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("Number", ctx.numberMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\n", ctx.numberMode, "");
    } }, dependencies: [_shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_3__.InputNumberComponent, _shared_components_input_currency_input_currency_component__WEBPACK_IMPORTED_MODULE_4__.InputCurrencyComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vLmNvbXBvbmVudC5sZXNzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 53145:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/demo/demo.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoModule": () => (/* binding */ DemoModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _demo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo-routing.module */ 83110);
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo.component */ 78835);
/* harmony import */ var src_app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common/webservice.service */ 91565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





class DemoModule {
}
DemoModule.ɵfac = function DemoModule_Factory(t) { return new (t || DemoModule)(); };
DemoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DemoModule });
DemoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [src_app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_3__.WebserviceService], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _demo_routing_module__WEBPACK_IMPORTED_MODULE_1__.DemoRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DemoModule, { declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_2__.DemoComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _demo_routing_module__WEBPACK_IMPORTED_MODULE_1__.DemoRoutingModule] }); })();


/***/ }),

/***/ 13951:
/*!*****************************************************!*\
  !*** ./src/app/pages/system/base/base.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/common/webservice.service */ 91565);
/* harmony import */ var src_app_common_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/const */ 44556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);








class BaseComponent {
    constructor(webService, router, cdf, datePipe) {
        this.webService = webService;
        this.router = router;
        this.cdf = cdf;
        this.datePipe = datePipe;
        this.formItemNm = {};
        this.list = [];
        this.title = 'nam pham';
    }
    ngOnDestroy() {
        this.destroy();
    }
    ngOnInit() {
        this.setFormItemNm();
    }
    setFormItemNm() {
        let url = this.router.url;
        this.webService.PostCallWs(src_app_common_const__WEBPACK_IMPORTED_MODULE_1__.Ant100PostUrlParams, { url: url }, (response) => {
            this.list = response;
            this.list.forEach((row) => {
                this.formItemNm[row.stt] = row.title1;
            });
            this.fnInit();
        });
    }
    getDate() {
        let date = this.datePipe.transform(new Date(), 'yyyy/MM/dd') + "";
        return date;
    }
    formatDate(d) {
        if (d == null || d == '') {
            return '';
        }
        let date = this.datePipe.transform(d, 'yyyy/MM/dd') + "";
        return date;
    }
}
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_common_webservice_service__WEBPACK_IMPORTED_MODULE_0__.WebserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe)); };
BaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BaseComponent, selectors: [["app-base"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe])], decls: 0, vars: 0, template: function BaseComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_demo_demo_module_ts.js.map