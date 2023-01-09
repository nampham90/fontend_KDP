"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_page-demo_except_except_module_ts"],{

/***/ 7249:
/*!*****************************************************************!*\
  !*** ./src/app/pages/page-demo/except/except-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExceptRoutingModule": () => (/* binding */ ExceptRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'except403', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_except_except403_except403_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./except403/except403.module */ 22662)).then(m => m.Except403Module) },
    { path: 'except404', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_except_except404_except404_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./except404/except404.module */ 80963)).then(m => m.Except404Module) },
    { path: 'except500', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_except_except500_except500_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./except500/except500.module */ 5355)).then(m => m.Except500Module) },
    { path: 'network-error', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_except_network-error_network-error_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./network-error/network-error.module */ 61306)).then(m => m.NetworkErrorModule) },
    { path: 'no-data', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_page-demo_except_no-data_no-data_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./no-data/no-data.module */ 9522)).then(m => m.NoDataModule) },
    { path: '', redirectTo: 'except403', pathMatch: 'full' }
];
class ExceptRoutingModule {
}
ExceptRoutingModule.ɵfac = function ExceptRoutingModule_Factory(t) { return new (t || ExceptRoutingModule)(); };
ExceptRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExceptRoutingModule });
ExceptRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExceptRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 41063:
/*!*********************************************************!*\
  !*** ./src/app/pages/page-demo/except/except.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExceptModule": () => (/* binding */ ExceptModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _except_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./except-routing.module */ 7249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class ExceptModule {
}
ExceptModule.ɵfac = function ExceptModule_Factory(t) { return new (t || ExceptModule)(); };
ExceptModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExceptModule });
ExceptModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _except_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExceptRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExceptModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _except_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExceptRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-demo_except_except_module_ts.js.map