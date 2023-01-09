"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_level_menu1_menu1-1_menu1-1_module_ts"],{

/***/ 82437:
/*!*********************************************************************!*\
  !*** ./src/app/pages/level/menu1/menu1-1/menu1-1-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu11RoutingModule": () => (/* binding */ Menu11RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'menu1-1-1', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_level_menu1_menu1-1_menu1-1-1_menu1-1-1_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./menu1-1-1/menu1-1-1.module */ 46369)).then(m => m.Menu111Module) },
    { path: 'menu1-1-2', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_level_menu1_menu1-1_menu1-1-2_menu1-1-2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./menu1-1-2/menu1-1-2.module */ 87396)).then(m => m.Menu112Module) },
    { path: '', redirectTo: 'menu1-1-1', pathMatch: 'full' }
];
class Menu11RoutingModule {
}
Menu11RoutingModule.ɵfac = function Menu11RoutingModule_Factory(t) { return new (t || Menu11RoutingModule)(); };
Menu11RoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Menu11RoutingModule });
Menu11RoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Menu11RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 21683:
/*!*************************************************************!*\
  !*** ./src/app/pages/level/menu1/menu1-1/menu1-1.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu11Module": () => (/* binding */ Menu11Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _menu1_1_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu1-1-routing.module */ 82437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class Menu11Module {
}
Menu11Module.ɵfac = function Menu11Module_Factory(t) { return new (t || Menu11Module)(); };
Menu11Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Menu11Module });
Menu11Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _menu1_1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Menu11RoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Menu11Module, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _menu1_1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Menu11RoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_level_menu1_menu1-1_menu1-1_module_ts.js.map