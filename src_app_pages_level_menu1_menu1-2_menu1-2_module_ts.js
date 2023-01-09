"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_level_menu1_menu1-2_menu1-2_module_ts"],{

/***/ 36809:
/*!*********************************************************************!*\
  !*** ./src/app/pages/level/menu1/menu1-2/menu1-2-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu12RoutingModule": () => (/* binding */ Menu12RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_level_menu1_menu1_2_menu1_2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/level/menu1/menu1-2/menu1-2.component */ 3833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _app_pages_level_menu1_menu1_2_menu1_2_component__WEBPACK_IMPORTED_MODULE_0__.Menu12Component,
        data: { title: 'Menu1-2', key: 'menu1-2' }
    }
];
class Menu12RoutingModule {
}
Menu12RoutingModule.ɵfac = function Menu12RoutingModule_Factory(t) { return new (t || Menu12RoutingModule)(); };
Menu12RoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Menu12RoutingModule });
Menu12RoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Menu12RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3833:
/*!****************************************************************!*\
  !*** ./src/app/pages/level/menu1/menu1-2/menu1-2.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu12Component": () => (/* binding */ Menu12Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var _shared_pipes_number_loop_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/pipes/number-loop.pipe */ 48786);




function Menu12Component_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u5360\u4F4D\u6F14\u793A\u6EDA\u52A8\u6761\u7F13\u5B58", i_r2, "");
} }
class Menu12Component {
    constructor() { }
    ngOnInit() { }
}
Menu12Component.ɵfac = function Menu12Component_Factory(t) { return new (t || Menu12Component)(); };
Menu12Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Menu12Component, selectors: [["app-menu1-2"]], decls: 5, vars: 3, consts: [[1, "normal-table-wrap"], ["nz-input", "", 1, "full-with"], [4, "ngFor", "ngForOf"]], template: function Menu12Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u591A\u7EA7\u9875\u9762\u7F13\u5B58-\u9875\u9762menu1-2 \u5728\u4E0B\u9762\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u503C\uFF0C\u5207\u6362tab\u6F14\u793A\u7F13\u5B58 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Menu12Component_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "numberLoop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, 88));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__.NzInputDirective, _shared_pipes_number_loop_pipe__WEBPACK_IMPORTED_MODULE_0__.NumberLoopPipe], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 26026:
/*!*************************************************************!*\
  !*** ./src/app/pages/level/menu1/menu1-2/menu1-2.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu12Module": () => (/* binding */ Menu12Module)
/* harmony export */ });
/* harmony import */ var _app_pages_level_menu1_menu1_2_menu1_2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/level/menu1/menu1-2/menu1-2.component */ 3833);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _menu1_2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu1-2-routing.module */ 36809);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class Menu12Module {
}
Menu12Module.ɵfac = function Menu12Module_Factory(t) { return new (t || Menu12Module)(); };
Menu12Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: Menu12Module });
Menu12Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _menu1_2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Menu12RoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](Menu12Module, { declarations: [_app_pages_level_menu1_menu1_2_menu1_2_component__WEBPACK_IMPORTED_MODULE_0__.Menu12Component], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _menu1_2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Menu12RoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_level_menu1_menu1-2_menu1-2_module_ts.js.map