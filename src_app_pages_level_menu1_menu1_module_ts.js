"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_level_menu1_menu1_module_ts"],{

/***/ 7575:
/*!***********************************************************!*\
  !*** ./src/app/pages/level/menu1/menu1-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu1RoutingModule": () => (/* binding */ Menu1RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'menu1-1', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_level_menu1_menu1-1_menu1-1_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./menu1-1/menu1-1.module */ 21683)).then(m => m.Menu11Module) },
    { path: 'menu1-2', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_level_menu1_menu1-2_menu1-2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./menu1-2/menu1-2.module */ 26026)).then(m => m.Menu12Module) },
    { path: '', redirectTo: 'menu1-2', pathMatch: 'full' }
];
class Menu1RoutingModule {
}
Menu1RoutingModule.ɵfac = function Menu1RoutingModule_Factory(t) { return new (t || Menu1RoutingModule)(); };
Menu1RoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Menu1RoutingModule });
Menu1RoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Menu1RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 43216:
/*!***************************************************!*\
  !*** ./src/app/pages/level/menu1/menu1.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu1Module": () => (/* binding */ Menu1Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _menu1_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu1-routing.module */ 7575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class Menu1Module {
}
Menu1Module.ɵfac = function Menu1Module_Factory(t) { return new (t || Menu1Module)(); };
Menu1Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Menu1Module });
Menu1Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _menu1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Menu1RoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Menu1Module, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _menu1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Menu1RoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_level_menu1_menu1_module_ts.js.map