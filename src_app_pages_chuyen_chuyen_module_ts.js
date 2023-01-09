"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_chuyen_chuyen_module_ts"],{

/***/ 25575:
/*!*******************************************************!*\
  !*** ./src/app/pages/chuyen/chuyen-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChuyenRoutingModule": () => (/* binding */ ChuyenRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'spch00101', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_common_UrlDisplay_ts-src_app_core_services_http_chuyen_chuyendto_service_ts-s-1a8c31"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_chuyen_spch00101_spch00101_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./spch00101/spch00101.module */ 24731)).then(m => m.Spch00101Module) },
    { path: 'spch00201', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_common_UrlDisplay_ts-src_app_core_services_http_chuyen_chuyendto_service_ts-s-1a8c31"), __webpack_require__.e("src_app_pages_chuyen_spch00201_spch00201_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./spch00201/spch00201.module */ 51911)).then(m => m.Spch00201Module) },
    { path: '', redirectTo: 'spch00101', pathMatch: 'full' }
];
class ChuyenRoutingModule {
}
ChuyenRoutingModule.ɵfac = function ChuyenRoutingModule_Factory(t) { return new (t || ChuyenRoutingModule)(); };
ChuyenRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChuyenRoutingModule });
ChuyenRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChuyenRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 16447:
/*!***********************************************!*\
  !*** ./src/app/pages/chuyen/chuyen.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChuyenModule": () => (/* binding */ ChuyenModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _chuyen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chuyen-routing.module */ 25575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class ChuyenModule {
}
ChuyenModule.ɵfac = function ChuyenModule_Factory(t) { return new (t || ChuyenModule)(); };
ChuyenModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ChuyenModule });
ChuyenModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _chuyen_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChuyenRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChuyenModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _chuyen_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChuyenRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_chuyen_chuyen_module_ts.js.map