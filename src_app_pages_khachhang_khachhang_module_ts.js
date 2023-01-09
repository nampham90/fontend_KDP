"use strict";
(self["webpackChunkng_ant_admin"] = self["webpackChunkng_ant_admin"] || []).push([["src_app_pages_khachhang_khachhang_module_ts"],{

/***/ 50228:
/*!*************************************************************!*\
  !*** ./src/app/pages/khachhang/khachhang-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KhachhangRoutingModule": () => (/* binding */ KhachhangRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'spkh00101', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_common_UrlDisplay_ts-src_app_core_services_http_khachhang_khachhang-dto_servi-d6336a"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_khachhang_spkh00101_spkh00101_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./spkh00101/spkh00101.module */ 16837)).then(m => m.Spkh00101Module) },
    { path: 'spkh00201', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_common_UrlDisplay_ts-src_app_core_services_http_khachhang_khachhang-dto_servi-d6336a"), __webpack_require__.e("src_app_pages_khachhang_spkh00201_spkh00201_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./spkh00201/spkh00201.module */ 10306)).then(m => m.Spkh00201Module) },
    { path: '', redirectTo: 'spkh00101', pathMatch: 'full' }
];
class KhachhangRoutingModule {
}
KhachhangRoutingModule.ɵfac = function KhachhangRoutingModule_Factory(t) { return new (t || KhachhangRoutingModule)(); };
KhachhangRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: KhachhangRoutingModule });
KhachhangRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](KhachhangRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 7912:
/*!*****************************************************!*\
  !*** ./src/app/pages/khachhang/khachhang.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KhachhangModule": () => (/* binding */ KhachhangModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _khachhang_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./khachhang-routing.module */ 50228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class KhachhangModule {
}
KhachhangModule.ɵfac = function KhachhangModule_Factory(t) { return new (t || KhachhangModule)(); };
KhachhangModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: KhachhangModule });
KhachhangModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _khachhang_routing_module__WEBPACK_IMPORTED_MODULE_0__.KhachhangRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](KhachhangModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _khachhang_routing_module__WEBPACK_IMPORTED_MODULE_0__.KhachhangRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_khachhang_khachhang_module_ts.js.map