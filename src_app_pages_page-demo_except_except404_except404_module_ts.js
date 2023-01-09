"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_page-demo_except_except404_except404_module_ts"],{

/***/ 74363:
/*!******************************************************************************!*\
  !*** ./src/app/pages/page-demo/except/except404/except404-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Except404RoutingModule": () => (/* binding */ Except404RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _except404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./except404.component */ 50663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _except404_component__WEBPACK_IMPORTED_MODULE_0__.Except404Component, data: { title: '404', key: 'except404' } }];
class Except404RoutingModule {
}
Except404RoutingModule.ɵfac = function Except404RoutingModule_Factory(t) { return new (t || Except404RoutingModule)(); };
Except404RoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Except404RoutingModule });
Except404RoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Except404RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 50663:
/*!*************************************************************************!*\
  !*** ./src/app/pages/page-demo/except/except404/except404.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Except404Component": () => (/* binding */ Except404Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/result */ 64655);





class Except404Component {
    constructor() { }
    ngOnInit() { }
}
Except404Component.ɵfac = function Except404Component_Factory(t) { return new (t || Except404Component)(); };
Except404Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Except404Component, selectors: [["app-except404"]], decls: 4, vars: 0, consts: [["nzStatus", "404", "nzTitle", "404", "nzSubTitle", "Sorry, the page you visited does not exist."], ["nz-result-extra", ""], ["nz-button", "", "nzType", "primary"]], template: function Except404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-result", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, dependencies: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_4__.NzResultComponent, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_4__.NzResultExtraDirective], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 80963:
/*!**********************************************************************!*\
  !*** ./src/app/pages/page-demo/except/except404/except404.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Except404Module": () => (/* binding */ Except404Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _except404_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./except404-routing.module */ 74363);
/* harmony import */ var _except404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./except404.component */ 50663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class Except404Module {
}
Except404Module.ɵfac = function Except404Module_Factory(t) { return new (t || Except404Module)(); };
Except404Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: Except404Module });
Except404Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _except404_routing_module__WEBPACK_IMPORTED_MODULE_1__.Except404RoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](Except404Module, { declarations: [_except404_component__WEBPACK_IMPORTED_MODULE_2__.Except404Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _except404_routing_module__WEBPACK_IMPORTED_MODULE_1__.Except404RoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-demo_except_except404_except404_module_ts.js.map