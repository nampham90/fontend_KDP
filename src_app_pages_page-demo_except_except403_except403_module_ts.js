"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_page-demo_except_except403_except403_module_ts"],{

/***/ 81571:
/*!******************************************************************************!*\
  !*** ./src/app/pages/page-demo/except/except403/except403-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Except403RoutingModule": () => (/* binding */ Except403RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _except403_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./except403.component */ 79725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _except403_component__WEBPACK_IMPORTED_MODULE_0__.Except403Component, data: { title: '403', key: 'except403' } }];
class Except403RoutingModule {
}
Except403RoutingModule.ɵfac = function Except403RoutingModule_Factory(t) { return new (t || Except403RoutingModule)(); };
Except403RoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Except403RoutingModule });
Except403RoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Except403RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 79725:
/*!*************************************************************************!*\
  !*** ./src/app/pages/page-demo/except/except403/except403.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Except403Component": () => (/* binding */ Except403Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/result */ 64655);






class Except403Component {
    constructor(cdr, ngZone) {
        this.cdr = cdr;
        this.ngZone = ngZone;
    }
    ngOnInit() { }
}
Except403Component.ɵfac = function Except403Component_Factory(t) { return new (t || Except403Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
Except403Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Except403Component, selectors: [["app-except403"]], decls: 4, vars: 0, consts: [["nzStatus", "403", "nzTitle", "403", "nzSubTitle", "Sorry, you are not authorized to access this page."], ["nz-result-extra", ""], ["nz-button", "", "nzType", "primary"]], template: function Except403Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-result", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, dependencies: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__.NzWaveDirective, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_4__.NzResultComponent, ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_4__.NzResultExtraDirective], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 22662:
/*!**********************************************************************!*\
  !*** ./src/app/pages/page-demo/except/except403/except403.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Except403Module": () => (/* binding */ Except403Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _except403_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./except403-routing.module */ 81571);
/* harmony import */ var _except403_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./except403.component */ 79725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class Except403Module {
}
Except403Module.ɵfac = function Except403Module_Factory(t) { return new (t || Except403Module)(); };
Except403Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: Except403Module });
Except403Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _except403_routing_module__WEBPACK_IMPORTED_MODULE_1__.Except403RoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](Except403Module, { declarations: [_except403_component__WEBPACK_IMPORTED_MODULE_2__.Except403Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _except403_routing_module__WEBPACK_IMPORTED_MODULE_1__.Except403RoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-demo_except_except403_except403_module_ts.js.map