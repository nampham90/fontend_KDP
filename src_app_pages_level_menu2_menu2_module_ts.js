"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_level_menu2_menu2_module_ts"],{

/***/ 23042:
/*!***********************************************************!*\
  !*** ./src/app/pages/level/menu2/menu2-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu2RoutingModule": () => (/* binding */ Menu2RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_pages_level_menu2_menu2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/pages/level/menu2/menu2.component */ 23217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _app_pages_level_menu2_menu2_component__WEBPACK_IMPORTED_MODULE_0__.Menu2Component,
        data: { title: 'Menu2', key: 'menu2' }
    }
];
class Menu2RoutingModule {
}
Menu2RoutingModule.ɵfac = function Menu2RoutingModule_Factory(t) { return new (t || Menu2RoutingModule)(); };
Menu2RoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Menu2RoutingModule });
Menu2RoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Menu2RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 23217:
/*!******************************************************!*\
  !*** ./src/app/pages/level/menu2/menu2.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu2Component": () => (/* binding */ Menu2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var _shared_pipes_number_loop_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/pipes/number-loop.pipe */ 48786);




function Menu2Component_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u5360\u4F4D\u6F14\u793A\u6EDA\u52A8\u6761\u7F13\u5B58", i_r2, "");
} }
class Menu2Component {
    constructor() { }
    ngOnInit() { }
}
Menu2Component.ɵfac = function Menu2Component_Factory(t) { return new (t || Menu2Component)(); };
Menu2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Menu2Component, selectors: [["app-menu2"]], decls: 5, vars: 3, consts: [[1, "normal-table-wrap"], ["nz-input", "", 1, "full-with"], [4, "ngFor", "ngForOf"]], template: function Menu2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u591A\u7EA7\u9875\u9762\u7F13\u5B58-\u9875\u9762menu2 \u5728\u4E0B\u9762\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u503C\uFF0C\u5207\u6362tab\u6F14\u793A\u7F13\u5B58 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Menu2Component_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "numberLoop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, 88));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__.NzInputDirective, _shared_pipes_number_loop_pipe__WEBPACK_IMPORTED_MODULE_0__.NumberLoopPipe], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 55995:
/*!***************************************************!*\
  !*** ./src/app/pages/level/menu2/menu2.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu2Module": () => (/* binding */ Menu2Module)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _menu2_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu2-routing.module */ 23042);
/* harmony import */ var _menu2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu2.component */ 23217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class Menu2Module {
}
Menu2Module.ɵfac = function Menu2Module_Factory(t) { return new (t || Menu2Module)(); };
Menu2Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: Menu2Module });
Menu2Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _menu2_routing_module__WEBPACK_IMPORTED_MODULE_1__.Menu2RoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](Menu2Module, { declarations: [_menu2_component__WEBPACK_IMPORTED_MODULE_2__.Menu2Component], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _menu2_routing_module__WEBPACK_IMPORTED_MODULE_1__.Menu2RoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_level_menu2_menu2_module_ts.js.map