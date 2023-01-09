"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_page-demo_except_network-error_network-error_module_ts"],{

/***/ 99140:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/page-demo/except/network-error/network-error-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkErrorRoutingModule": () => (/* binding */ NetworkErrorRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_page_demo_except_network_error_network_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/page-demo/except/network-error/network-error.component */ 15359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _app_pages_page_demo_except_network_error_network_error_component__WEBPACK_IMPORTED_MODULE_0__.NetworkErrorComponent, data: { title: 'Lỗi mạng', key: 'network-error' } }];
class NetworkErrorRoutingModule {
}
NetworkErrorRoutingModule.ɵfac = function NetworkErrorRoutingModule_Factory(t) { return new (t || NetworkErrorRoutingModule)(); };
NetworkErrorRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NetworkErrorRoutingModule });
NetworkErrorRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NetworkErrorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 15359:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/page-demo/except/network-error/network-error.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkErrorComponent": () => (/* binding */ NetworkErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/result */ 64655);





function NetworkErrorComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", "L\u1ED7i m\u1EA1ng");
} }
class NetworkErrorComponent {
    constructor() {
        this.img = '../../../../../assets/imgs/except/net-error.svg';
    }
    ngOnInit() { }
}
NetworkErrorComponent.ɵfac = function NetworkErrorComponent_Factory(t) { return new (t || NetworkErrorComponent)(); };
NetworkErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NetworkErrorComponent, selectors: [["app-network-error"]], decls: 6, vars: 1, consts: [["nzTitle", "L\u1ED7i m\u1EA1ng", "nzSubTitle", "Xin l\u1ED7i, k\u1EBFt n\u1ED1i m\u1EA1ng c\u1EE7a b\u1EA1n \u0111\u00E3 b\u1ECB ng\u1EAFt k\u1EBFt n\u1ED1i, vui l\u00F2ng ki\u1EC3m tra m\u1EA1ng c\u1EE7a b\u1EA1n !", 3, "nzIcon"], ["nz-result-extra", ""], ["nz-button", "", "nzType", "primary"], ["iconTpl", ""], [2, "max-width", "400px", 3, "src", "alt"]], template: function NetworkErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-result", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "L\u00E0m m\u1EDBi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NetworkErrorComponent_ng_template_4_Template, 1, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzIcon", _r0);
    } }, dependencies: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_4__.NzResultComponent, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_4__.NzResultExtraDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXR3b3JrLWVycm9yLmNvbXBvbmVudC5sZXNzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 61306:
/*!******************************************************************************!*\
  !*** ./src/app/pages/page-demo/except/network-error/network-error.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkErrorModule": () => (/* binding */ NetworkErrorModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _network_error_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network-error-routing.module */ 99140);
/* harmony import */ var _network_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./network-error.component */ 15359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class NetworkErrorModule {
}
NetworkErrorModule.ɵfac = function NetworkErrorModule_Factory(t) { return new (t || NetworkErrorModule)(); };
NetworkErrorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NetworkErrorModule });
NetworkErrorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _network_error_routing_module__WEBPACK_IMPORTED_MODULE_1__.NetworkErrorRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NetworkErrorModule, { declarations: [_network_error_component__WEBPACK_IMPORTED_MODULE_2__.NetworkErrorComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _network_error_routing_module__WEBPACK_IMPORTED_MODULE_1__.NetworkErrorRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-demo_except_network-error_network-error_module_ts.js.map