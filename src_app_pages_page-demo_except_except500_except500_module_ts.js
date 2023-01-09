"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_page-demo_except_except500_except500_module_ts"],{

/***/ 50356:
/*!******************************************************************************!*\
  !*** ./src/app/pages/page-demo/except/except500/except500-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Except500RoutingModule": () => (/* binding */ Except500RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _except500_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./except500.component */ 46080);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _except500_component__WEBPACK_IMPORTED_MODULE_0__.Except500Component, data: { title: '500', key: 'except500' } }];
class Except500RoutingModule {
}
Except500RoutingModule.ɵfac = function Except500RoutingModule_Factory(t) { return new (t || Except500RoutingModule)(); };
Except500RoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Except500RoutingModule });
Except500RoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Except500RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 46080:
/*!*************************************************************************!*\
  !*** ./src/app/pages/page-demo/except/except500/except500.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Except500Component": () => (/* binding */ Except500Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/result */ 64655);





class Except500Component {
    constructor() { }
    ngOnInit() { }
}
Except500Component.ɵfac = function Except500Component_Factory(t) { return new (t || Except500Component)(); };
Except500Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Except500Component, selectors: [["app-except500"]], decls: 4, vars: 0, consts: [["nzStatus", "500", "nzTitle", "500", "nzSubTitle", "Sorry, there is an error on server."], ["nz-result-extra", ""], ["nz-button", "", "nzType", "primary"]], template: function Except500Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-result", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, dependencies: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_4__.NzResultComponent, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_4__.NzResultExtraDirective], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 5355:
/*!**********************************************************************!*\
  !*** ./src/app/pages/page-demo/except/except500/except500.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Except500Module": () => (/* binding */ Except500Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _except500_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./except500-routing.module */ 50356);
/* harmony import */ var _except500_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./except500.component */ 46080);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class Except500Module {
}
Except500Module.ɵfac = function Except500Module_Factory(t) { return new (t || Except500Module)(); };
Except500Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: Except500Module });
Except500Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _except500_routing_module__WEBPACK_IMPORTED_MODULE_1__.Except500RoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](Except500Module, { declarations: [_except500_component__WEBPACK_IMPORTED_MODULE_2__.Except500Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _except500_routing_module__WEBPACK_IMPORTED_MODULE_1__.Except500RoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-demo_except_except500_except500_module_ts.js.map